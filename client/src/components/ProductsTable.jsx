import React, { useEffect, useContext } from "react";
import ProductFinder from "../apis/ProductFinder";
import { ProductsContext } from "../context/ProductsContext";
import BasicTable from "./Table";
import { useHistory } from "react-router-dom";

const ProductsTable = () => {
  const { products, setProducts } = useContext(ProductsContext);
  let history = useHistory();

  // Make a GET api call and set the response data equal to 'products'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductFinder.get("/");
        setProducts(response.data.data.products);
      } catch (err) {}
    };

    fetchData();
  }, [setProducts]);

  // Make a DELETE api call
  const handleDelete = async (id) => {
    try {
      const response = await ProductFinder.delete(`/${id}`);
      console.log(response);
      setProducts(
        products.filter((product) => {
          return product.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  // On Update, go to the update page
  const handleUpdate = (id) => {
    history.push(`/products/${id}/update`);
  };

  return (
    <BasicTable
      products={products}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    ></BasicTable>
  );
};

export default ProductsTable;
