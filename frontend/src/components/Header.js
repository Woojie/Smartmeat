import React from 'react';
import logo from '../resources/logo/logo-header.png'
import { logout } from '../store/actions/login'

const Header = ( {dispatch} ) => {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="logo" width="20"/>
          SmartMeat
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="community">Calculator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Meet The Team</a>
            </li>
          </ul>
          <button type="button" className="btn btn-dark my-2 my-sm-0" 
          onClick={()=>dispatch(logout())}
          >Logout </button>
        </div>
      </nav>
    )
  }

export default Header;