const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // プリフライトのときはX-Tokenのヘッダ送信を許可
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "X-Token");
  }
  next();
});

router.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

module.exports = router;
