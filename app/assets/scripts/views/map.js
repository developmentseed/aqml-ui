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
          <Map />
        </div>
      </div>
    );
  }
}

export default MapView;
