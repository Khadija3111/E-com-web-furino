// src/utils/cartUtils.ts

import { Product } from "../../types/product";


const CART_KEY = 'cart';

export const addToCart = (product: Product) => {
  try {
    const cart: Product[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const existingProductIndex = cart.findIndex(item => item._id === product._id);
    
    if (existingProductIndex > -1) {
      cart[existingProductIndex].inventory += 1;
    } else {
      cart.push({
        ...product,
        inventory: 1
      });
    }
    
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    return cart;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return [];
  }
};

export const removeFromCart = (productId: string) => {
  try {
    let cart: Product[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    return cart;
  } catch (error) {
    console.error('Error removing from cart:', error);
    return [];
  }
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  try {
    const cart: Product[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const productIndex = cart.findIndex(item => item._id === productId);
    
    if (productIndex > -1) {
      cart[productIndex].inventory = quantity;
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
    
    return cart;
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    return [];
  }
};

export const getCartItems = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]') as Product[];
  } catch (error) {
    console.error('Error getting cart items:', error);
    return [];
  }
};