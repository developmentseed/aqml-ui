'use strict';
import React from 'react';

class PageNav extends React.Component {
  render () {
    return (
      <header className='page-header'>
        <div className='inner'>
          <div className='page__headline'>
            <h1><a to='/'>Air-to-Date</a></h1>
          </div>
          <nav className='prime-nav'>
            <ul className='prime-nav--list'>
              <li className='prime-nav--item'><a href=''>Houston</a></li>
              <li className='prime-nav--item'><a href=''>New Dehli</a></li>
              <li className='prime-nav--item'><a href=''>About</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default PageNav;
