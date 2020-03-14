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
