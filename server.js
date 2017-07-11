const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");

// MIDDLEWARE

// ROUTES
app.listen(port, () => {
  console.log(`Spinning with express: Port ${port}`);
});
