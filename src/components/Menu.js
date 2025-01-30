import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://api.example.com/food-menu") 
      .then(response => setMenuItems(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Our Menu</h2>
      {menuItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
