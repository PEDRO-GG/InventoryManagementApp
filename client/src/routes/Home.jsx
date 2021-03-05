import React from "react";
import Header from "../components/Header";
import AddProductForm from "../components/AddProductForm";
import ProductsTable from "../components/ProductsTable";

const Home = () => {
  return (
    <div>
      <Header />
      <AddProductForm />
      <ProductsTable />
    </div>
  );
};

export default Home;
