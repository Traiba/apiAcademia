const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products.routes");
const morgan = require("morgan");

const config = require("./config");

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", productRoutes);

module.exports = app;
