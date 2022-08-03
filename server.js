const mongoose = require("mongoose");
const dotenv = require("dotenv");

// uncaught exception
process.on("uncaughtException", err => {
  console.log("Error Name :", err.name);
  console.log("Error Message :", err.message);
  console.log("Unhandled Outer Exception");
  process.exit(1);
});

dotenv.config({
  path: "./config.env"
});
const app = require("./app");

const DB = process.env.DATABASE;

// connecting to remote server db
mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
  })
  .then(con => {
    // console.log(con.connections);
    console.log("DB connection successful");
  })
  .catch(err => {
    console.log("Error connecting Database :", err);
  });

// server listner
const server = app.listen(process.env.PORT || 3000, () => {
  console.log("App running on port on " + process.env.PORT || 3000 + " ...");
});

// catch unhandled Rejection outside request
process.on("unhandledRejection", err => {
  console.log("Error Name :", err.name);
  console.log("Error Message :", err.message);
  console.log("Unhandled Outer Rejection");
  server.close(() => {
    process.exit(1);
  });
});
