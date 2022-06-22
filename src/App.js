import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import './style.css';

export default function App() {
  const [isCartOpen, setCartIsOpen] = useState();

  const showCartHandler = () => {
    setCartIsOpen(true);
  };

  const hideCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
