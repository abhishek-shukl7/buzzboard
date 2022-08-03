const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const bodyParser = require("body-parser");

const orderRouter = require("./routes/orderRouter");

const AppError = require("./utils/appError");
const app = express();

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request! please try after some time"
});

app.use("/api", limiter);
app.use(mongoSanitize());
app.use(xss());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use("/api/orders/", orderRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`cannot find the route ${req.originalUrl}`, 404));
});

module.exports = app;
