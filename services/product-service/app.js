const express = require("express");
const app = express();

app.use(express.json());

let products = [];

app.post("/products", (req, res) => {
  const product = { id: Date.now(), ...req.body };
  products.push(product);
  res.json(product);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3002, () => console.log("Product Service running"));
