import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import "../components/CSS/card.css";
import Footer from "../components/layout/Footer";

export const Card = ({
  orderedProductsEndpoint,
  handleAddToCart,
  selectedCategory,
}) => {
  const [cartitems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
        setFilteredItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredItems(
        cartitems.filter((item) => item.category === selectedCategory)
      );
    } else {
      setFilteredItems(cartitems);
    }
  }, [selectedCategory, cartitems]);

  return (
    <>
      <div>
        <Searchbar cartitems={cartitems} setFilteredItems={setFilteredItems} />
      </div>

      <div id="card">
        {filteredItems.map((item) => (
          <div key={item.id} className="items">
            <img src={item.picture} alt={item.name} />
            <div className="text">
              <p>id: {item.id}</p>
              <p>category: {item.category}</p>
              <p>Name:{item.name}</p>
              <p>{item.description}</p>
              <p>NPR:{item.price}</p>
              <div className="Button-Order">
                <button id="order-btn" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Card;
