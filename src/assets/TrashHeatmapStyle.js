const heatmapConfig = {
    // increase weight as diameter breast height increases
    'heatmap-weight': {
      property: 'dbh',  //TO CHANGE
      type: 'exponential',
      stops: [
        [1, 0],
        [62, 1]
      ]
    },
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
      'rgba(236,222,239,0)',
      0.2,
      'rgb(208,209,230)',
      0.4,
      'rgb(166,189,219)',
      0.6,
      'rgb(103,169,207)',
      0.8,
      'rgb(28,144,153)'
    ],
    // increase radius as zoom increases
    'heatmap-radius': {
      stops: [
        [13, 10],
        [17, 15]
      ]
    },
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
  