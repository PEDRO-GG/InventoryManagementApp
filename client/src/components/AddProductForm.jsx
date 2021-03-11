import React, { useState, useContext } from "react";
import ProductFinder from "../apis/ProductFinder";
import { ProductsContext } from "../context/ProductsContext";

const AddProductForm = () => {
  const { addProducts } = useContext(ProductsContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [totalSold, setTotalSold] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProductFinder.post("/", {
        name,
        price,
        status: status,
		total_sold: totalSold,
		total_revenue: totalRevenue,
      });
      console.log(response.data.data);
      addProducts(response.data.data.product);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Product Name"
            />
          </div>
          <div className="col">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Price"
            />
          </div>
          <div className="col">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Status</option>
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
          </div>
          <div className="col">
            <input
              value={totalSold}
              onChange={(e) => setTotalSold(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Total Sold"
            />
          </div>
          <div className="col">
            <input
              value={totalRevenue}
              onChange={(e) => setTotalRevenue(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Total Revenue"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
