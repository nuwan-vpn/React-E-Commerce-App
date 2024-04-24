import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../telephone_icon.png';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        <div className="container-fluid">
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt="store" height={60} width={60} />
          </Link>
          <ul className="navbar-nav me-auto align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                products
              </Link>
            </li>
          </ul>
          <Link to='/cart' className='navbar-text'>
            <button className='btn btn-light'>
              <FontAwesomeIcon icon={faCartPlus} /> My Cart
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}