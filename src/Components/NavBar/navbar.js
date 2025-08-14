import React from 'react';
import { Link } from 'react-router-dom'; // Import only Link

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to="/course-modules">Course Module</Link></li>
        {/* <li><Link to="/services">Services</Link></li> */}
        <li><Link to="/login">Login/Register</Link></li>

       
        
      </ul>
    </nav>
  );
};

export default Navbar;
