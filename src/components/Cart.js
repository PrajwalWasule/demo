import React from 'react';

function Cart({ cartItems, closeCart }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-xl mb-4">Your Cart</h2>
        <div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button onClick={closeCart} className="bg-red-500 text-white p-2 rounded mt-4 w-full">
          Close list
        </button>
      </div>
    </div>
  );
}

export default Cart;
