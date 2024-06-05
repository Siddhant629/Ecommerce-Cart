import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/product.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const goToCart = () => {
    setCurrentPage('cart');
  };

  const goToCheckout = () => {
    setCurrentPage('checkout');
  };

  const goToProducts = () => {
    setCurrentPage('products');
  };

  return (
    <div className="app">
      {currentPage === 'products' && (
        <ProductList products={products} addToCart={addToCart} goToCart={goToCart} />
      )}
      {currentPage === 'cart' && (
        <Cart cart={cart} goToCheckout={goToCheckout} goToProducts={goToProducts} />
      )}
      {currentPage === 'checkout' && (
        <Checkout cart={cart} goToProducts={goToProducts} />
      )}
    </div>
  );
}

export default App;
