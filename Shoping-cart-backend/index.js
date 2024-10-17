const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
require("dotenv").config();

const products = require("./products");

const app = express();
const PORT = process.env.PORT;
const uri = process.env.DB_URI;

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);

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
