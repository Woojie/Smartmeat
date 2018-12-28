import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img src="../img/logo/logo-header.png" alt="logo" width="20"/>
          SmartMeat
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Calculator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Meet The Team</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

export default Header;