import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/CSS/TableStyle.css";
import "../components/CSS/Cart.css";

function Cart(props) {
  const [orderedItems, setOrderedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/orderedproducts");
        const jsonData = await res.json();
        console.log("Fetched orders response:", jsonData);
        setOrderedItems(jsonData); // Directly set the fetched array
        calculateTotal(jsonData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();

    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    setOrderedItems([]);
    setTotalAmount(0);
  }, [currentUser]);

  const handleIncrement = (id) => {
    const updatedItems = orderedItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setOrderedItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleDecrement = (id) => {
    const updatedItems = orderedItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setOrderedItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleDelete = async (id) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:5000/orderedproducts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (deleteResponse.ok) {
        const updatedItems = orderedItems.filter((item) => item.id !== id);
        setOrderedItems(updatedItems);
        calculateTotal(updatedItems);
        console.log("Product deleted successfully.");
      } else {
        console.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const calculateTotal = (items) => {
    if (!Array.isArray(items)) {
      console.error("calculateTotal received invalid items:", items);
      return;
    }
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/home");
  };

  const handlePayNow = () => {
    setShowPaymentOptions(true);
  };

  const handlePayment = (method) => {
    if (method === "khalti") {
      window.location.href = "https://web.khalti.com/#/";
    } else if (method === "esewa") {
      window.location.href = "https://esewa.com.np/#/home";
    }
  };

  const fetchOrderHistory = async () => {
    if (currentUser) {
      try {
        const res = await fetch("http://localhost:5000/orderedproducts");
        const jsonData = await res.json();
        console.log("Fetched order history response:", jsonData);
        const userOrderHistory = jsonData.filter(
          (item) => item.userId === currentUser.id
        );
        setOrderHistory(userOrderHistory);
        setShowHistory(true);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    }
  };

  return (
    <>
      <div id="Cart-display">
        <div className="Ordered-products">
          <h1 className="headings">Available Orders</h1>
          <div className="top-right">
            {currentUser && (
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>

          {currentUser && (
            <div className="U-details">
              <h2>User Details :</h2>
              <p>Name: {currentUser.name}</p>
              <p>Email: {currentUser.email}</p>
              <p>Number: {currentUser.Number}</p>
              <button className="history-btn" onClick={fetchOrderHistory}>
                View Order History
              </button>
            </div>
          )}
          {showHistory && (
            <div className="order-history">
              <h2>Order History:</h2>
              <td>UserName:{currentUser.name}</td>
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order) => (
                    <tr key={order.id}>
                      <td>{order.name}</td>
                      <td>{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <br></br>
          <h2
            style={{ fontWeight: "bold", textAlign: "center", margin: "8px" }}
          >
            Available Orders
          </h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Picture</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(orderedItems) &&
                orderedItems.map((selectedProduct) => (
                  <tr key={selectedProduct.id}>
                    <td>{selectedProduct.id}</td>
                    <td>{selectedProduct.name}</td>
                    <td>{selectedProduct.price}</td>
                    <td>{selectedProduct.description}</td>
                    <td className="place-ordered-img">
                      <img
                        src={selectedProduct.picture}
                        alt={selectedProduct.name}
                      />
                    </td>
                    <td>
                      <button
                        className="Remove-btn"
                        onClick={() => handleDecrement(selectedProduct.id)}
                      >
                        -
                      </button>
                      {selectedProduct.quantity}
                      <button
                        className="Add-btn"
                        onClick={() => handleIncrement(selectedProduct.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => handleDelete(selectedProduct.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="total-sum">Total: NPR.{totalAmount}</div>

          {!showPaymentOptions && (
            <button className="pay-now" onClick={handlePayNow}>
              Pay Now
            </button>
          )}

          {showPaymentOptions && (
            <div>
              <button
                className="pay-now"
                onClick={() => handlePayment("khalti")}
              >
                Pay with Khalti
              </button>
              <button
                className="pay-now"
                onClick={() => handlePayment("esewa")}
              >
                Pay with eSewa
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
