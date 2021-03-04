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
app.get("/api/v1/products", async (req, res) => {
  try {
    const products = await db.query("SELECT * FROM products");
    res.status(200).json({
      status: "success",
      results: products.rows.length,
      data: {
        products: products.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//get one product
app.get("/api/v1/products/:id", async (req, res) => {
  try {
    const product = await db.query("SELECT * FROM products WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        product: product.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//create a product
app.post("/api/v1/products", async (req, res) => {
  try {
    const newProduct = await db.query(
      "INSERT INTO products (name, price, status, total_sold, total_revenue) VALUES ($1, $2, $3, $4, $5) returning *",
      [
        req.body.name,
        req.body.price,
        req.body.status,
        req.body.total_sold,
        req.body.total_revenue,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//update a product
app.put("/api/v1/products/:id", async (req, res) => {
  try {
    const updatedProduct = await db.query(
      "UPDATE products SET name = $1, price = $2, status = $3, total_sold = $4, total_revenue = $5 where id = $6 returning *",
      [
        req.body.name,
        req.body.price,
        req.body.status,
        req.body.total_sold,
        req.body.total_revenue,
        req.params.id,
      ]
    );

    res.status(200).json({
      status: "success",
      data: {
        product: updatedProduct.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//delete a product
app.delete("/api/v1/products/:id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM products where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
