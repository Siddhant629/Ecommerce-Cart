import React from 'react';

function Cart({ cart, goToCheckout, goToProducts }) {
  const totalQuantity = cart.reduce((acc, item) => acc + parseInt(item.quantity), 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: &#8377;{item.price}</div>
          </li>
        ))}
      </ul>
      <div className="total">Total Quantity: {totalQuantity}</div>
      <div className="total">Total Price: &#8377;{totalPrice.toFixed(2)}</div>
      <button onClick={goToCheckout}>Proceed to Checkout</button>
      <button onClick={goToProducts}>Back to Products</button>
    </div>
  );
}

export default Cart;
