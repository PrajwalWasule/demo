import React from 'react';
import { Link } from 'react-router-dom';

function Header({ setShowCart }) {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl">Shoes Shopy</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><button onClick={() => setShowCart(true)} className="bg-yellow-400 p-2 rounded">Cart</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
