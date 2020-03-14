const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Emp = require('../models/Emp');
const config = require('../config/bd');



router.post('/register', (req, res) => {
    const { empFullName, empUsername, email, password, empPhone,admin } = req.body;
    const emp = {}
    emp.empFullName = empFullName,
        emp.empUsername = empUsername,
        emp.email = email + '@enjaz.com',
        emp.empPhone = empPhone,
        emp.password = password,
        emp.admin = admin
    let newEmp = new Emp(emp)

    Emp.addUser(newEmp, (err, emp) => {
        if (err) {
            let message = "";
            if (err.errors.empUsername) message = "empUsername is already exist. ";
            if (err.errors.email) message += "Email already exists.";
            return res.json({
                success: false,
                message
            });
        } else {
            return res.json({
                success: true,
                message: "Emp registration is successful."
            });
        }
    });
});


router.post('/login', (req, res, next) => {
    const empUsername = req.body.empUsername;
    const password = req.body.password;

    Emp.getUserByUsername(empUsername, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                message: "Emp not found."
            });
        }

        Emp.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({
                    type: "user",
                    data: {
                        _id: user._id,
                        empUsername: user.empUsername,
                        empFullName: user.empFullName,
                        email: user.email,
                        empPhone: user.empPhone
                    }
                }, config.secret, {
                    expiresIn: 36000000 // for 1 week time in milliseconds
                });
                return res.json({
                    success: true,
                    token: "jwt " + token
                });
            } else {
                return res.json({
                    success: true,
                    message: "Wrong Password."
                });
            }
        });
    });
});

module.exports = router;