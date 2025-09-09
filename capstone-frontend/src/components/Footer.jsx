import React from 'react'
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          {/* Replace with actual icons or images */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
        </div>
        <div className="footer-copy">
          <span>&copy; {currentYear} Capstone Storefront</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer