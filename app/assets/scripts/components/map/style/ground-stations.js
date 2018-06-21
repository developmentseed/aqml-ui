const layer = {
  id: 'ground-stations',
  type: 'symbol',
  source: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  },
  layout: {
    'icon-image': 'ground-station-light',
    'icon-allow-overlap': true
  }
};

export default layer;

export function createGroundStationsLayer (locations) {
  layer.source.data.features = locations.map((location) => {
    return {
      type: 'Feature',
      properties: location,
      geometry: {
        type: 'Point',
        coordinates: [location.coordinates.longitude, location.coordinates.latitude]
      }
    };
  });

  return layer;
}
