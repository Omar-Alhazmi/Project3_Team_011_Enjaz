const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const empRoute = require("./Routes/emp");
const cors = require("cors");
const passport = require("passport");
const ticketRoute = require("./Routes/ticket");
require("dotenv/config");

connection();
app.use(express.json());
// BodyParser Middleware
app.use(cors());
app.use(bodyParser.json());
// Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

app.use("/emp", empRoute);
app.use("/emp", ticketRoute);

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});


console.log("===== HERE WE END =====");
const PROT = process.env.PROT || 5000;
app.listen(PROT, () => {
    console.log(`LISTENING to http://localhost:${PROT}`);
});
