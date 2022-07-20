// node and third party imports
const router = require("express").Router();
const { response } = require("express");
const url = require("url"); // for querying json with url

// internal imports
const Invoice = require("../model/invoice");

////////////////////////////////////////////////

// callable url methods

//GETS

// get all invoices in json array format
router.get("/getInvoices", async (req, res) => {
  const invoices = await Invoice.find({});
  res.json(invoices);
});

// get a particular invoice based on "id" query
router.get("/getInvoice/", async (req, res) => {
  // const _id = req.params.invoiceid; //and add ":invoiceid" to the url
  const _id = req.query.id;
  const invoices = await Invoice.findById(_id);
  res.json([invoices]);
});

///POSTS
// post/upload a new invoice
router.post("/newInvoice", async (req, res) => {
  const tax_reg_no = req.body.tax_reg_no;
  const telephone = req.body.telephone;
  const external_order_no = req.body.external_order_no;
  const subtotal = req.body.subtotal;
  //   const __v = req.body.__v;
  const date = req.body.date;
  const discount = req.body.discount;
  const fax = req.body.fax;
  const order_number = req.body.order_number;
  const vat_no = req.body.vat_no;
  const newInvoice = new Invoice({
    tax_reg_no: tax_reg_no,
    telephone: telephone,
    external_order_no: external_order_no,
    subtotal: subtotal,
    // __v: __v,
    date: date,
    discount: discount,
    fax: fax,
    order_number: order_number,
    vat_no: vat_no,
  });

  const savedInvoice = await newInvoice.save();
  res.json(savedInvoice);
});

//PATCHES
// edit invoice
router.patch("/editInvoice/", async (req, res) => {
  const _id = req.query.id;
  const update = await Invoice.findByIdAndUpdate(_id, {
    $set: {
      tax_reg_no: req.body.tax_reg_no,
      telephone: req.body.telephone,
      external_order_no: req.body.external_order_no,
      subtotal: req.body.subtotal,
      // __v : req.body.__v,
      date: req.body.date,
      discount: req.body.discount,
      fax: req.body.fax,
      order_number: req.body.order_number,
      vat_no: req.body.vat_no,
    },
  });
  res.json(update);
});

//DELETES
router.delete("/deleteInvoice", async (req, res) => {
  const _id = req.query.id;
  await Invoice.remove({ _id: _id });
  res.json({ Status: "removed sucessfully" });
});

module.exports = router;
