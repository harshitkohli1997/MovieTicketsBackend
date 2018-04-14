const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define station schema schema
var stationSchema = new Schema({
  station: {
    type: String,
  },
  location: String,
  date: {
    type: Date,
    default: Date.now
  },
  time:String,
  status:Boolean,
  userno:Number
});

// Export Mongoose model
module.exports =  mongoose.model('station', stationSchema);
