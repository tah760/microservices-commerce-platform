const express = require("express");
const proxy = require("http-proxy-middleware").createProxyMiddleware;

const app = express();

app.use("/auth", proxy({ target: "http://auth-service:3001", changeOrigin: true }));
app.use("/products", proxy({ target: "http://product-service:3002", changeOrigin: true }));
app.use("/orders", proxy({ target: "http://order-service:3003", changeOrigin: true }));

app.listen(3000, () => console.log("Gateway running on 3000"));
