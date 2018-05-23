'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

class PageNav extends React.Component {
  render () {
    return (
      <header className='page-header'>
        <div className='inner'>
          <div className='page__headline'>
            <h1><Link to='/'>Air-to-Date</Link></h1>
          </div>
          <nav className='prime-nav'>
            <ul className='prime-nav--list'>
              <li className='prime-nav--item'><Link to='/cities/houston'>Houston</Link></li>
              <li className='prime-nav--item'><Link to='/cities/new-delhi'>New Dehli</Link></li>
              <li className='prime-nav--item'><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default PageNav;
