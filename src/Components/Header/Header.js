import React, { useContext } from 'react';
import Navbar from '../NavBar/navbar';
import { ThemeContext } from '../../ThemeContext'; // Import ThemeContext
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons (you'll need to install react-icons)

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`header ${theme}`}> {/* Add theme class to the header */}
      <div className="brand">
        <img
          src="https://mcf.indianrailways.gov.in/uploads/IR_logo_Red_400.png"
          alt="logo" className="logo"  />
        <h1  className='title'>Indian Railway Summer Training Portal </h1>
      </div>
       <div className="navbar-container">
        <Navbar /> {/* Navbar component */}
      </div>
      
      <button onClick={toggleTheme} className="theme-toggle-button"> {/* New class */}
        {theme === 'light' ? <FaMoon /> : <FaSun />}  {/* Display icons based on theme */}
      </button>
     
    </div>
  );
};

export default Header;
