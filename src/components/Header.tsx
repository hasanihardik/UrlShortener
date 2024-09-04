import { useState } from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  const [click, setClick] = useState(false);

  const toggleNavClick = () => {
    setClick(!click);
  };

  return (
    <header className="header">
      <div className="content | container">
        {/* Desktop Navbar */}
        <nav className="nav">
          <div className="nav__inner">
            {/* Logo */}
            <a href="#" className="logo">
              <img src={Logo} alt="Logo" />
            </a>

            {/* Nav Links */}
            <ul className="nav__links | hide">
              <li>
                <a className="nav__link" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="nav__link" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="nav__link" href="#">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="buttons | hide">
            <a className="nav__link" href="#">
              Login
            </a>
            <a className="nav__link | btn" datatype="narrow" href="#">
              Sign Up
            </a>
          </div>
        </nav>

        {/* Mobile Nav */}
        <nav className={`mobile-nav ${click ? 'show' : ''}`}>
          <ul className="nav__links | primary">
            <li>
              <a href="#" className="nav__link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Resources
              </a>
            </li>
          </ul>

          <ul className="nav__links | secondary">
            <li>
              <a className="nav__link" href="">
                Login
              </a>
            </li>
            <li>
              <a className="nav__link | btn" datatype="wide" href="#">
                Sign up
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu Icons */}
        <div className="menu-icons" onClick={toggleNavClick}>
          {click ? (
            <button>
              <i className="fa-solid fa-close"></i>
            </button>
          ) : (
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
