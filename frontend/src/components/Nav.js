import React from 'react';
import logo from '../resources/logo/logo-header.png'
import { Link } from 'react-router-dom'


const Nav = ( {logout, loggedIn} ) => {
  
  let loginButton = loggedIn ? (
    <button type="button" className="btn btn-dark my-2 my-sm-0 primary" 
    onClick={()=>logout()}
    >Logout </button>
  ): <Link to="/login"><button type="button" className="btn btn-dark my-2 my-sm-0 primary" >
      Login 
    </button></Link>
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <span className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="logo" width="20"/>
            Smart<span className='primary'>Meat</span>
            {/* SmartMeat */}
          </Link>
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/ourTool">
                <span className="nav-link">Our Tool</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/community">
                <span className="nav-link">Community</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">
                <span className="nav-link">Profile</span>
              </Link>
            </li>
          </ul>
          {loginButton}
        </div>
      </nav>
    )
  }

export default Nav;