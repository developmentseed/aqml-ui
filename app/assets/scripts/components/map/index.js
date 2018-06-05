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
        <div class='popup__header'>
          <p class='label'>Last reading:</p>
          <p class='reading'>3.90 µg/m³ at 2016/03/28 06:00</p>
        </div>
        <p class='label'>Nearest Station 10km away</p>
        <p class='station-key station-name'>Houston Park Place C</p>
        <p class='reading'>3.90 µg/m³ at 2016/03/28 06:00</p>
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
