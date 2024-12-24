import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About'; 
import SignIn from './components/Signin';
import SignUp from './components/Signup';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <Router>
      <div>
        <Header setShowCart={setShowCart} />
        
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/signin" element={<SignIn />}/> 
          <Route path="/signup" element={<SignUp />}/> 
        </Routes>

        {showCart && <Cart cartItems={cartItems} closeCart={closeCart} />}
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
