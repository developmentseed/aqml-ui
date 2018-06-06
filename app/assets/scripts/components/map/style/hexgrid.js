import hexGrid from '@turf/hex-grid';
import bbox from '@turf/bbox';
import pointInPolygon from '@turf/boolean-point-in-polygon';
import buffer from '@turf/buffer';
import data from './test-data';

const bounds = bbox(buffer(data, '100'));
const grid = hexGrid(bounds, '17', { units: 'kilometers' });

grid.features = grid.features.map((feature) => {
  data.features.forEach((point) => {
    if (pointInPolygon(point, feature)) {
      feature.properties = point.properties;
    }
  });
  if (feature.properties.concentration) {
    return feature
  }
}).filter((feature) => !!feature);

grid.features.forEach(console.log);

const source = {
  type: 'geojson',
  data: grid
};

const stops = [
  [0, 'rgba(33,102,172, 0.6)'],
  [50, 'rgba(103,169,207, 0.6)'],
  [150, 'rgba(209,229,240,0.6)'],
  [200, 'rgba(253,219,199,0.6)'],
  [300, 'rgba(239,138,98,0.6)'],
  [500, 'rgba(178,24,43,0.6)']
];

const layer = {
  id: 'hexgrid',
  type: 'fill',
  source,
  paint: {
    'fill-color': {
      property: 'concentration',
      stops: stops
    }
  }
};

export default layer;
