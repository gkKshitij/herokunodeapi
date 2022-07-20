// node internal and third party imports
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

// initializing middleware
app.use(morgan("dev"));
app.use(express.json()); // parses incoming requests with JSON payloads

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

// using mongoose to connect to mongodb
mongoose
  .connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to db"))
  .catch((err) => console.log(err));

////////////////////////////////////////////////

// url path defining
app.get("/", (req, res) => res.send("Working!!!"));

// authentication jugad for zapier or any basic authentication
app.get("/me", async (req, res) => {
  res.json(true);
});

app.use("/invoices", require("./routes/invoices"));

//listener
app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port " + process.env.PORT);
});
