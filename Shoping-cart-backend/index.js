const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const products = require("./products");

const app = express();
const PORT = process.env.PORT;
const uri = process.env.DB_URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Shoping Cart API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(PORT, console.log(`Server is listening at ${PORT}`));

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected succesfully..."))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
