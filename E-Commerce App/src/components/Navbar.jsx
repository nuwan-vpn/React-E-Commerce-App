import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../telephone_icon.png';
// import '../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>
          <img src={logo} alt="Logo"  height={100} width={100}/>
          
        </Link>
        <p>hhhh</p>
          <h1>gbdffghth</h1>
      </nav>
    );
  }
}