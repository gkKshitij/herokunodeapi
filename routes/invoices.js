// node imports
const router = require("express").Router();
const { response } = require("express");

// internal imports
const Invoice = require("../model/invoice");

router.post("/newInvoice", async (req, res) => {
  //   const title = req.body.title;
  //   const description = req.body.description;
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
    // title: title,
    // description: description,
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

router.get("/getInvoices", async (req, res) => {
  const invoices = await Invoice.find({});
  res.json(invoices);
});

router.get("/getInvoice/?id=:invoiceid", async (req, res) => {
  const _id = req.params.invoiceid;
  const invoices = await Invoice.findById(_id);
  res.json(invoices);
});

router.patch("/editInvoice/:invoiceid", async (req, res) => {
  const _id = req.params.invoiceid;
  const update = await Invoice.findByIdAndUpdate(_id, {
    $set: {
      //   description: req.body.description,
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

router.delete("/deleteInvoice/:invoiceid", async (req, res) => {
  const _id = req.params.invoiceid;
  await Invoice.remove({ _id: _id });
  res.json({ Status: "removed sucessfully" });
});

module.exports = router;
