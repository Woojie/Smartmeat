import React from 'react';
import logo from '../resources/logo/logo-header.png'
import { Link } from 'react-router-dom'


const Header = ( {logout, loggedIn} ) => {
  
  let loginButton = loggedIn ? (
    <button type="button" className="btn btn-dark my-2 my-sm-0" 
    onClick={()=>logout()}
    >Logout </button>
  ): <Link to="/login"><button type="button" className="btn btn-dark my-2 my-sm-0" >
      Login 
    </button></Link>
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" width="20"/>
          SmartMeat
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/ourTool">Our Tool</a>
            </li>
            <li className="nav-item">
              <Link to="community">
                <p className="nav-link" href="community">Community</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="profile">
                <p className="nav-link">Profile</p>
              </Link>
            </li>
          </ul>
          {loginButton}
        </div>
      </nav>
    )
  }

export default Header;