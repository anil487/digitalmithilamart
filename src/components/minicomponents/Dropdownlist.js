import React from "react";

const Dropdownlist = ({ onChange }) => {
  return (
    <div>
      <p className="Drop-down-btn">Category</p>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="all" >All PRODUCTS</option> 
        <option value="accessories">Accessories</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="footwear">Footwear</option>
        <option value="personal care">Personal Care</option>
      </select>
    </div>
  );
};

export default Dropdownlist;
