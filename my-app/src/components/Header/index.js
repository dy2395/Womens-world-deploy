import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Logo from '../../assets/womansworldLogo.svg';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        <div className='login-logout-container'>
          <div className="navbar">
            <div className="container nav-container">
                <input className="checkbox" type="checkbox" />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>  
              <div className="logo">
              </div>
              <div className="menu-items">
                <li><Link to="/health" className='navbar__content'>health</Link></li>
                <li><Link to="/nightlife" className="navbar__content">night life</Link></li>
                <li><Link to="/work" className="navbar__content">work</Link></li>
                <li><Link to="/style" className="navbar__content">style</Link></li>
                <li><Link to="/food" className="navbar__content">food</Link></li>
                <li><Link to="/media" className="navbar__content">media</Link></li>
                {Auth.loggedIn() ? (
                    <>
                    <li><a href="/" onClick={logout} className="login-logout">logout</a></li>
                    </>
                  ) : (
                    <>
                    <li><Link to="/login" className="login-logout">login</Link></li>
                    <li><Link to="/signup" className="login-logout">signup</Link></li>
                    </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <img className='logoIMG' src={Logo} alt='logo'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
