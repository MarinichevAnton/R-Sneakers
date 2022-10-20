import React from 'react';
import AppContext from '../../context.js';

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, props) => props.price + sum, 0);
 
  return { cartItems, setCartItems, totalPrice };
};