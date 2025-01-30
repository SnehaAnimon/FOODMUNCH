import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>FoodMunch</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/order-summary">Order Summary</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
