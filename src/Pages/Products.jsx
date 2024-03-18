import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import "../components/CSS/card.css";
export const Products = () => {
  return (
    <>
      <Card />
    </>
  );
};

const Card = () => {
  const [cartitems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
        setFilteredItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddToCart = (item) => {
    setOrders([...orders, item]);
  };

  return (
    <>
      <Searchbar cartitems={cartitems} setFilteredItems={setFilteredItems} />

      <div id="card">
        {filteredItems.map((item) => (
          <div key={item.id} className="items">
            <img src={item.picture} alt={item.name} />
            <div className="text">
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>NPR.{item.price}</p>
              <div className="Button">
                <button id="order-btn" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </>
  );
};

export default Card;
