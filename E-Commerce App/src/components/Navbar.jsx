import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../telephone_icon.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </nav>
    );
  }
}