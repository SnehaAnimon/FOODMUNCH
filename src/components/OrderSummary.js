import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OrderSummary = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name} - {item.quantity} x ₹{item.price}</p>
            </div>
          ))}
          <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          <button>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
