const express = require("express");
const app = express();
const connection = require("./config/dbConncection");
const bodyParser = require("body-parser");
const empRoute = require("./Routes/emp");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

const Emp = require("./models/Emp");
const transactionRoute = require("./Routes/ticket");
require("dotenv/config");

connection();
app.use(express.json());
// BodyParser Middleware
app.use(cors());
app.use(bodyParser.json());
// Passport Middleware

app.use(passport.initialize());
app.use(passport.session());



app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});



// const checkUserType = function (req, res, next) {
//   const userType = req.originalUrl.split('/')[2];
//   console.log(userType)
//   // Bring in the passport authentication
//   require('./config/passport')(userType, passport);
//   next();
// };

// app.use(checkUserType);

app.use("/api/emp", empRoute);
// app.use("/api/admin", adminRoute);
app.use("/api", transactionRoute);
// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send("We think you are lost!");
});

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, "../public/500.html"));
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'enjaz-front-end/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'enjaz-front-end', 'build', 'index.html')); // relative path
  });
}

console.log("===== HERE WE END =====");
const PROT = process.env.PROT || 5000;
app.listen(PROT, () => {
  console.log(`LISTENING to http://localhost:${PROT}`);
});
