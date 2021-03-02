require("dotenv").config();
const express = require("express");
const db = require("./db/index");
const cors = require("cors");
const app = express();

// MIDDLEWARE //

app.use(cors());
app.use(express.json()); // allows req.body

// ROUTES //

//get all products
app.get("/api/v1/products", (req, res) => {});

//get one product
app.get("/api/v1/products/:id", (req, res) => {});

//create a product
app.post("/api/v1/products", (req, res) => {});

//update a product
app.put("/api/v1/products/:id", (req, res) => {});

//delete a product
app.delete("/api/v1/products/:id", (req, res) => {});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
