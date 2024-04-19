import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../telephone_icon.png';
// import '../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt="store"  height={60} width={60}/> 
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}