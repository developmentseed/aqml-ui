import data from './test-data';

const source = {
  type: 'geojson',
  data: data
};

const stops = [
  [0, 'rgba(0,228,2, 0.6)'],
  [50, 'rgba(255,255,2, 0.6)'],
  [150, 'rgba(256,126,2,0.6)'],
  [200, 'rgba(255,0,2,0.6)'],
  [300, 'rgba(153,0,76,0.6)'],
  [500, 'rgba(126,0,35,0.6)']
];

const layer = {
  id: 'points',
  type: 'circle',
  source,
  paint: {
    'circle-color': {
      property: 'concentration',
      stops: stops
    },
    'circle-radius': 15,
    'circle-opacity': [
      'interpolate',
      ['linear'],
      ['zoom'],
      9, 0,
      10, 1
    ]
  }
};

export default layer;
