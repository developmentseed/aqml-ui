'use strict';
import React from 'react';
import Map from '../components/map';
import Nav from '../components/header-nav';

class MapView extends React.Component {
  render () {
    return (
      <div className='map'>
        <div className='inner'>
          <Nav />
        </div>
        <Map />
        <div className='inner'>
          <div className='map__panel'>
            <div className='panel__header'>
              <img className='time-icon' src='assets/graphics/content/moon.svg'/>
              <h1 className='panel__title'>Houston</h1>
              <h2 className='panel__subtitle'>Texas</h2>
              <h3 className='panel__temperature'>82°</h3>
              <p className='panel__date'>May 15, 2018</p>
            </div>
            <div className='panel__key'>
              <p className='note panel__item'>Data Refreshed 15 min ago.</p>
              <p className='label panel__item station-key'>Ground Station</p>
              <p className='label'>Air Quality Index <a href=''>(USEPA)</a></p>
              <p className='label'>Air Quality Opacity</p>
            </div>
            <div className='panel__footer'>
              <p className='label'>WHO Fine Particulate Matter Guidelines:</p>
              <ul className='guidelines-list'>
                <li>10 μg/m3 annual mean</li>
                <li>25 μg/m3 24-hour mean</li>
              </ul>
              <a href=''>More Information</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapView;
