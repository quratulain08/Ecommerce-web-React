import React from "react";

const CheckoutPage = ({ cartItems, totalAmount }) => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.productName}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <p>Total: ${totalAmount}</p>
    </div>
  );
};

export default CheckoutPage;
