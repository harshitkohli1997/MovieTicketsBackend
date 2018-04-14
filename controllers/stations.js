const Station = require('../models/station');
const moment = require('moment');

// Hardcode the days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for the times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

  const index = (req, res, next) => {
  // Find all movies and return json response
  Station.find().lean().exec((err, stations) => res.json(
    // Iterate through each movie
    { stations: stations.map(station => ({
      ...station,
      days,     // and append days
      times,    // and times to each
    }))}
  ));
};
module.exports = index;
