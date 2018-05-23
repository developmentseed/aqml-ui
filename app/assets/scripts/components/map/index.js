'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

import config from '../../config';
mapboxgl.accessToken = config.mapboxAccessToken;

class Map extends React.Component {
  componentDidMount () {
    const style = 'mapbox://styles/devseed/cjhi9mjln0abb2soaw4rv130t';
    this.mapboxgl = new mapboxgl.Map({
      container: this.refs.map,
      style
    });
  }

  render () {
    const children = this.props.children;

    return (
      <figure className='map__container'>
        <div className='map' ref='map'>
          {children}
        </div>
      </figure>
    );
  }
}

Map.propTypes = {
  children: PropTypes.node
};

export default Map;
