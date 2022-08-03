const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: {
    type: Number,
    require: [true, "Order must have order number."]
  },
  item_name: {
    type: String,
    require: [true, "Order must have item names."]
  },
  cost: {
    type: String,
  },
  order_date: {
    type: String
  },
  delivery_date: {
    type: String
  }
});

const Orders = mongoose.model("Orders", orderSchema);
console.log(Orders);
module.exports = Orders;
