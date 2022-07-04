const path = require("path");
const express = require("express");
const app = express();
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const cors = require("cors");
const bodyParser = require("body-parser");

// Load env file
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

// All Routes

const weatherRoutes = require("./routes/weatherRoutes.js");

app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.use(weatherRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
