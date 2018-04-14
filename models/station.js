const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define movie schema
var stationSchema = new Schema({
  station: {
    type: String,
    unique: true,
  },
  poster: String,
  location: String,
  days: Array,
  times: Array,
});

// Export Mongoose model
module.exports =  mongoose.model('station', stationSchema);
