/*eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWluZXJkIiwiYSI6ImNrdGp1NzI3azE0Z20ycW82OGVmaHh3cTUifQ.-S-xJcPcxlKSvEf4ocZgOA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/minerd/cktjul3ua057a17myd0luaanz',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    console.log(loc);
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //Extends to map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 200,
      left: 200,
      right: 200,
    },
  });
};
