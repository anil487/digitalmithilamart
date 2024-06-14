
import React, { useState } from "react";
import { Card } from "../components/Card";
import Dropdownlist from "./minicomponents/Dropdownlist";
import { useNavigate } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
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
      category: item.category,
      name: item.name,
      price: item.price,
      description: item.description,
      picture: item.picture,
      quantity: 1,
    };

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Dropdownlist onChange={handleCategoryChange} />
      <div>
      <p style={{ fontWeight: 'bold' }}>Selected Category: {selectedCategory}</p>
      </div>
      <Card
        orderedProductsEndpoint={orderedProductsEndpoint}
        handleAddToCart={handleAddToCart}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default Products;

