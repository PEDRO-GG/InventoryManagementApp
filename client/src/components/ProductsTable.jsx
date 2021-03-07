import React, { useEffect, useContext } from "react";
import ProductFinder from "../apis/ProductFinder";
import { ProductsContext } from "../context/ProductsContext";
import BasicTable from "./Table";

const ProductsTable = () => {
  // Make a GET api call and set the response data equal to 'products'
  const { products, setProducts } = useContext(ProductsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductFinder.get("/");
        console.log(response.data.data);
        setProducts(response.data.data.products);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return <BasicTable products={products}></BasicTable>;
};

export default ProductsTable;
