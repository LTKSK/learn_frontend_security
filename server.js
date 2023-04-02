const express = require("express");
const api = require("./routes/api");

const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  res.end("Top Page");
});

app.use("/api", api);

app.listen(port, () => {
  console.log(`server is runnning on http://localhost:${port}`);
});
