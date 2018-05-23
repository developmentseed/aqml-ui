'use strict';
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/header-nav';

class Landing extends React.Component {
  render () {
    return (
      <div>
        <div className='home'>
          <div className='inner'>
            <Nav/>
            <section className='home__header'>
              <h1 className='header__title'>Estimating Air Quality</h1>
              <p className='header__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae erat sed arcu accumsan rutrum quis sit amet lorem. Morbi lobortis enim a auctor malesuada. Nunc maximus luctus nisl. Nullam bibendum nec justo ut tincidunt. Mauris ornare viverra dolor,</p>
            </section>
            <section className='home__body'>
              <h2>Explore Air Quality by City</h2>
              <ul className='card-list'>
                <li className='card'>
                  <div className='card__header'>
                    <h3 className='card__title'>New Delhi<small>India</small></h3>
                  </div>
                  <div className='card__body'>
                    <h4> Latest Model Estimations </h4>
                    <ul className='reading-list'>
                      <li>112<span>μg/m³</span><small>highest reading</small></li>
                      <li>112<span>μg/m³</span><small>lowest reading</small></li>
                    </ul>
                  </div>
                  <Link to="/cities/new-delhi">
                    <button className='button button--base-bounded'>
                      View Air Quality
                    </button>
                  </Link>
                </li>

                <li className='card'>
                  <div className='card__header'>
                    <h3 className='card__title'>New Delhi<small>India</small></h3>
                  </div>
                  <div className='card__body'>
                    <h4> Latest Model Estimations </h4>
                    <ul className='reading-list'>
                      <li>112<span>μg/m³</span><small>highest reading</small></li>
                      <li>112<span>μg/m³</span><small>lowest reading</small></li>
                    </ul>
                  </div>
                  <Link to="/cities/new-delhi">
                    <button className='button button--base-bounded'>
                      View Air Quality
                    </button>
                  </Link>
                </li>
              </ul>
            </section>
            <footer className='home__footer'>
              <ul className='logo-list'>
                <li className='logo'><a href='http://www.wri.org/'><img src='assets/graphics/layout/wri-logo.png'/></a></li>
                <li className='logo'><a href='www.developmentseed.org'><img src='assets/graphics/layout/ds-logo-white.png'/></a></li>
                <li className='logo'><a href='https://www.nasa.gov/'><img src='assets/graphics/layout/nasa-logo.png'/></a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
