import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ cartitems, setFilteredItems }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterItems(query);
  };

  const filterItems = (query) => {
    const filteredItems = cartitems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div id="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default Searchbar;
