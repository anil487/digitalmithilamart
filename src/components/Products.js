import React from "react";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const orderedProductsEndpoint = "http://localhost:5000/orderedproducts";
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      navigate("/signin");
    } else {
      postData(item);
    }
  };

  const postData = async (item) => {
    const orderDetails = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      picture: item.picture,
      quantity: 1,
    };
    const orderedProductsEndpoint = "http://localhost:5000/orderedproducts";

    try {
      const postData = await fetch(orderedProductsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });
      if (postData.ok) {
        alert("Added product to cart successfully!");
      } else {
        console.error("Failed to add order to cart:", postData.statusText);
      }
    } catch (error) {
      console.error("Error on post request:", error);
    }
  };

  return (
    <>
      <Card
        orderedProductsEndpoint={orderedProductsEndpoint}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Products;
