const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Shoping Cart API...");
});

app.get("/products", (req, res) => {
  res.send([2, 3, 4]);
});

app.listen(PORT, console.log(`Server is listening at ${PORT}`));