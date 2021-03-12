// This file returns a axios object that allows us to query our database with .get, .put, etc.
import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "api/v1/products"
    : "http://localhost:3002/api/v1/products";
export default axios.create({
  baseURL: baseURL,
});
