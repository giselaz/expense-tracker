const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const Dbconnect = require("./utils/db");


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});