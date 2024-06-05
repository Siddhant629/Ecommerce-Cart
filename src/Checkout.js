import React from 'react';


function Checkout({ cart, goToProducts }) {
  const totalQuantity = cart.reduce((acc, item) => acc + parseInt(item.quantity), 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='checkout'>
      <h1 >Checkout</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: &#8377;{item.price}</div>
          </li>
        ))}
      </ul>
      <div className='total'>Total Quantity: {totalQuantity}</div>
      <div className='total'>Total Price: &#8377;{totalPrice.toFixed(2)}</div>
      <button className='confirm' onClick={() => alert('Order confirmed!')}>Confirm Order</button>
      <button onClick={goToProducts}>Back to Products</button>
    </div>
  );
}

export default Checkout;
