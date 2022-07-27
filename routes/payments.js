// node and third party imports
const router = require("express").Router();
const { response } = require("express");
const url = require("url"); // for querying json with url

// internal imports
const Payment = require("../model/payment");

////////////////////////////////////////////////

// callable url methods

//GETS

// get all payments in json array format
router.get("/getPayments", async (req, res) => {
  const payments = await Payment.find({});
  res.json(payments);
});

// get a particular payment based on "id" query
router.get("/getPayment/", async (req, res) => {
  // const _id = req.params.paymentid; //and add ":paymentid" to the url
  const _id = req.query.id;
  const payments = await Payment.findById(_id);
  res.json([payments]);
});

///POSTS
// post/upload a new payment
router.post("/newPayment", async (req, res) => {
  const price_id = req.query.price_id;
  const quantity = req.query.quantity;
  const newPayment = new Payment({
    price_id: price_id,
    quantity: quantity,
  });

  const savedPayment = await newPayment.save();
  res.json(savedPayment);
});

// //PATCHES
// // edit payment
// router.patch("/editPayment/", async (req, res) => {
//   const _id = req.query.id;
//   const update = await Payment.findByIdAndUpdate(_id, {
//     $set: {
//       tax_reg_no: req.body.tax_reg_no,
//       telephone: req.body.telephone,
//       external_order_no: req.body.external_order_no,
//       subtotal: req.body.subtotal,
//       // __v : req.body.__v,
//       date: req.body.date,
//       discount: req.body.discount,
//       fax: req.body.fax,
//       order_number: req.body.order_number,
//       vat_no: req.body.vat_no,
//     },
//   });
//   res.json(update);
// });

// //DELETES
// router.delete("/deletePayment", async (req, res) => {
//   const _id = req.query.id;
//   await Payment.remove({ _id: _id });
//   res.json({ Status: "removed sucessfully" });
// });

module.exports = router;
