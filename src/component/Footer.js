import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="language-selector">
          <FontAwesomeIcon icon={'face-beam-hand-over-mouth'}/>
          <Link to="/">English</Link>
          <Link to="/">Hindi</Link>
        </div> */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        
        </div>
        <div className="social-icons">
          <Link to="/">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
        <p className="copyright">Copyright &copy; {new Date().getFullYear()} Your Website Name</p>
      </div>
    </footer>
  )
}
