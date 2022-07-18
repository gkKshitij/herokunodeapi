const mongoose = require("mongoose");

const invoice = new mongoose.Schema({
  //   title: {
  //     required: true,
  //     type: String,
  //   },
  tax_reg_no: {
    required: false,
    type: String,
  },
  telephone: {
    required: false,
    type: String,
  },
  external_order_no: {
    required: false,
    type: String,
  },
  subtotal: {
    required: false,
    type: String,
  },
  __v: {
    required: false,
    type: String,
  },
  date: {
    required: false,
    type: String,
  },
  discount: {
    required: false,
    type: String,
  },
  fax: {
    required: false,
    type: String,
  },
  order_number: {
    required: false,
    type: String,
  },
  vat_no: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("invoices", invoice);
