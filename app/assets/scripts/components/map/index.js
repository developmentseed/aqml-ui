'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

import heatmap from './style/heatmap-example';

import config from '../../config';
mapboxgl.accessToken = config.mapboxAccessToken;

class Map extends React.Component {
  componentDidMount () {
    const style = 'mapbox://styles/devseed/cjhi9mjln0abb2soaw4rv130t';
    this.map = new mapboxgl.Map({
      container: this.refs.map,
      style
    });

    this.map.on('load', () => {
      this.map.addLayer(heatmap);
    });

    this.map.on('click', (e) => {
      console.log(e);
      const popupHtml = `<div>
        <p>oh hey</p>
        <p>lat: ${e.lngLat.lat}</p>
        <p>lon: ${e.lngLat.lon}</p>
      </div>`;

      return new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(popupHtml)
        .addTo(this.map);
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
