import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartStore } from '../store/CartStore';
import '../styles/navbar.css';

const Navbar = () => {
  const { items } = useCartStore();
  const totalPrice = items?.reduce((total, item) => total + item.price, 0);
  return (
    <nav className='navbar'>
      <h1>Capstone Storefront</h1>
      <section className='nav-links-container'>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/shop" className='nav-link'>Shop</NavLink>
        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/cart" className='nav-link'>Cart</NavLink>
        <NavLink to="/checkout" className='nav-link'>Checkout (${totalPrice.toFixed(2)})</NavLink>
      </section>
    </nav>
  )
}

export default Navbar