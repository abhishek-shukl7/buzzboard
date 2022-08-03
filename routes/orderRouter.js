const express = require("express");
const orderController = require("./../controller/orderController");
const bodyParser = require("body-parser");

const router = express.Router();

router.get("/list/", orderController.list);
router.post("/create/", bodyParser.raw({ type: "application/json" }),orderController.create);
router.post("/update/", bodyParser.raw({ type: "application/json" }),orderController.update);
router.get("/search/", bodyParser.raw({ type: "application/json" }),orderController.search);
router.get("/delete/", bodyParser.raw({ type: "application/json" }),orderController.delete);

module.exports = router;
