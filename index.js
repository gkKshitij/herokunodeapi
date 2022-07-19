const express = require("express");
const app = express();
var cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

mongoose
  .connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to db"))
  .catch((err) => console.log(err));

// path imports
app.get("/", (req, res) => res.send("Working!!!"));

app.get("/me", async (req, res) => {
  res.json(true);
});

app.use("/invoices", require("./routes/invoices"));

//listener
app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000", "");
});
