const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/orders", async (req, res) => {
  const { productId } = req.body;

  const productRes = await axios.get(`http://product-service:3002/products`);

  const product = productRes.data.find(p => p.id === productId);

  if (!product) return res.status(404).json({ error: "Product not found" });

  res.json({ message: "Order placed", product });
});

app.listen(3003, () => console.log("Order Service running"));
