import React, { useState } from 'react';

function ProductList({ products, addToCart, goToCart }) {
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>	&#8377;{product.price}</div>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
            />
            <button  onClick={() => {addToCart
            ({ ...product, quantity: quantities[product.id] || 1});
            alert("item added to cart");
            }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <button className='cartbutton' onClick={goToCart}>Go to Cart</button>
    </div>
  );
}

export default ProductList;
