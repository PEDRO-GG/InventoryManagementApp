// This file returns a axios object that allows us to query our database with .get, .put, etc.
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3002/api/v1/products",
});
