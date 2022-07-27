const mongoose = require("mongoose");

const payment = new mongoose.Schema({
  //   title: {
  //     required: true,
  //     type: String,
  //   },
  price_id: {
    required: true,
    type: String,
  },
  quantity: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("payments", payment);
