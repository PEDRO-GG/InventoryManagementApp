import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ProductFinder from "../apis/ProductFinder";
import FullWidthInput from "../components/FullWidthInput";
import SubmitButton from "../components/SubmitButton";
import HorizontalRadio from "../components/HorizontalRadio";
import InputDollarSignAdorment from "../components/InputDollarSignAdorment";

const UpdatePage = () => {
  //get the id from the url
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [totalSold, setTotalSold] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // GET the product with this id and set the state variables
      const response = await ProductFinder.get(`/${id}`);
      console.log(response.data.data.product);
      setName(response.data.data.product.name);
      setPrice(response.data.data.product.price);
      setStatus(response.data.data.product.status);
      setTotalSold(response.data.data.product.total_sold);
      setTotalRevenue(response.data.data.product.total_revenue);
      setLoading(false);
    };

    fetchData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({
    //   name: name,
    //   price: price,
    //   status: status,
    //   totalSold: totalSold,
    //   totalRevenue: totalRevenue,
    // });
    const updatedProduct = await ProductFinder.put(`/${id}`, {
      name: name,
      price: price,
      status: status,
      total_sold: totalSold,
      total_revenue: totalRevenue,
    });
    console.log(updatedProduct);
    history.push("/");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <form>
      <FullWidthInput
        value={name}
        label="name"
        stateFunction={setName}
      ></FullWidthInput>
      <InputDollarSignAdorment
        label="Price"
        amount={price}
        stateFunction={setPrice}
      ></InputDollarSignAdorment>
      <HorizontalRadio
        value={status}
        label="status"
        stateFunction={setStatus}
      ></HorizontalRadio>
      <FullWidthInput
        value={totalSold}
        label="Total Sold"
        stateFunction={setTotalSold}
      ></FullWidthInput>
      <InputDollarSignAdorment
        label="Total Revenue"
        amount={totalRevenue}
        stateFunction={setTotalRevenue}
      ></InputDollarSignAdorment>
      <SubmitButton onClick={handleSubmit}></SubmitButton>
    </form>
  );
};

export default UpdatePage;
