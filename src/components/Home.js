import React, { useState } from 'react';

function Home({ addToCart }) {
  const products = [
    { id: 1, name: 'Running Shoes', price: 50 },
    { id: 2, name: 'Sneakers', price: 60 },
    { id: 3, name: 'Boots', price: 80 },
    { id: 4, name: 'MKD ', price: 50 },
    { id: 5, name: 'man', price: 60 },
    { id: 6, name: 'power', price: 80 },
    { id: 7, name: ' light', price: 50 },
    { id: 8, name: 'www', price: 60 },
    { id: 9, name: 'eee', price: 80 },
    { id: 10, name: ' adi', price: 50 },
    { id: 11, name: 'spark', price: 60 },
    { id: 12, name: 'roboat', price: 80 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4 ">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white py-2 px-4 rounded mt-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
