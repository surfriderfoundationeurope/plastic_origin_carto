const heatmapConfig = {
    // increase intensity as zoom level increases
    'heatmap-intensity': {
      stops: [
        [13, 1],
        [17, 3]
      ]
    },
    // assign color values be applied to points depending on their density
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(0,0,0,0)',
      0.1,
      '#1e81b0',
      0.4,
      '#0073be',
      1,
      '#004d89'
    ],
    // increase radius as zoom increases
    'heatmap-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      0,
      5,
      9,
      17
      ],
    // decrease opacity to transition into the circle layer
    'heatmap-opacity': {
      default: 1,
      stops: [
        [16, 1],
        [17, 0]
      ]
    }
  };
  
  export default heatmapConfig;
  