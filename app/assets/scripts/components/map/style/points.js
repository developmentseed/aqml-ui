import data from './test-data';

const source = {
  type: 'geojson',
  data: data
};

const stops = [
  [0, 'rgba(33,102,172,1)'],
  [50, 'rgba(103,169,207,1)'],
  [150, 'rgba(209,229,240,1)'],
  [200, 'rgba(253,219,199,1)'],
  [300, 'rgba(239,138,98,1)'],
  [500, 'rgba(178,24,43,1)']
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
    'circle-radius': 10
  }
};

export default layer;
