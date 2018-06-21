import fetch from 'isomorphic-fetch';
import qs from 'querystringify';

module.exports = function (config) {
  if (!config) config = {};
  const baseUrl = config.url || 'https://api.openaq.org/v1/';

  function req (endpoint, params) {
    if (!params) params = {};
    const url = baseUrl + endpoint + qs.stringify(params, true);

    console.log('url', url)
    return fetch(url).then((res) => {
      if (res.status >= 400) {
        return console.error('Error fetching', url, res.status, res.body);
      }

      return res.json();
    });
  }

  function locations (params) {
    return req('locations', params);
  }

  function measurements (params) {
    return req('measurements', params);
  }

  return {
    locations,
    measurements
  };
};
