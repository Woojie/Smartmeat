import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header >
<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <p className="navbar-brand">SMARTMEAT</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item a ctive">
        <Link to="home"><p className="nav-link" href="/home">Home <span className="sr-only">(current)</span></p></Link>
      </li>
      <li className="nav-item">
        <Link to="/profile"><p className="nav-link">Profile</p></Link>
      </li>
      <li className="nav-item">
        <Link to="/community"><p className="nav-link">Community</p></Link>
      </li>
      <li className="nav-item">
        <p className="nav-link">About</p>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
</nav>

        {/* <div className='col-4 align-self-center shadow-sm p-3 rounded'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/help'>Help/FAQ</Link>
          </div> */}
      </header>
    )
  }

export default Header;