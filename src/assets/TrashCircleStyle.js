const circleConfig = {
    // increase the radius of the circle as the zoom level and dbh value increases
    'circle-radius': {
      'base': 2,
      'stops': [
      [17, 3],
      [22, 20]
      ]
      },
    'circle-color': [
      'match',
      ['get', 'type_id'],
      1, '#0073be',
      2, '#324d85',
      3, '#357089',
      4, '#38728d',
      5, '#3b7492',
      6, '#3e7696',
      7, '#497ca7',
      8, '#5682b8',
      9, '#6388c9',
      10, '#708ed9',
      /* other */ '#708ed9'
    ],
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
    'circle-opacity': {
      stops: [
        [16, 0],
        [17, 1]
      ]
    }
  }

  export default circleConfig;
