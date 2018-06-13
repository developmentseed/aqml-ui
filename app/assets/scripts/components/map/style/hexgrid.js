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
  [0, 'rgba(0,228,2, 0.6)'],
  [50, 'rgba(255,255,2, 0.6)'],
  [150, 'rgba(256,126,2,0.6)'],
  [200, 'rgba(255,0,2,0.6)'],
  [300, 'rgba(153,0,76,0.6)'],
  [500, 'rgba(126,0,35,0.6)']
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
