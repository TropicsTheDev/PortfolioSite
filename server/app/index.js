const express = require("express");

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  console.error("Error found", err);
  res.status(err.code || 500).json({
    message: err.message,
  });
});

module.exports = app;