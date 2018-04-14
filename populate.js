const mongoose = require('mongoose');
const Station = require('./models/station');

const stations = [
  {
    station: 'station 1',
    location: 'west delhi',
    time:'9:00AM',
    status:false
  },
  {
    station: 'station 1',
    location: 'west delhi',
    time:'11:00AM',
    status:false
  },
  {
    station: 'station 1',
    location: 'west delhi',
    time:'01:00PM',
    status:false
  },
  {
    station: 'station 1',
    location: 'west delhi',
    time:'3:00PM',
    status:false
  },
  {
    station: 'station 1',
    location: 'west delhi',
    time:'5:00PM',
    status:false
  },
  {
    station: 'station 1',
    location: 'west delhi',
    time:'7:00PM',
    status:false
  },
  {
    station: 'station 1',
    location: 'west delhi',
    time:'9:00PM',
    status:false
  },
  {
    station: 'station 2',
    location: 'south delhi',
    time:'9:00AM',
    status:false
  },
  {
    station: 'station 2',
    location: 'south delhi',
    time:'11:00AM',
    status:false
  },
  {
    station: 'station 2',
    location: 'south delhi',
    time:'01:00PM',
    status:false
  },
  {
    station: 'station 2',
    location: 'south delhi',
    time:'3:00PM',
    status:false
  },
  {
    station: 'station 2',
    location: 'south delhi',
    time:'5:00PM',
    status:false
  },
  {
    station: 'station 2',
    location: 'south delhi',
    time:'7:00PM',
    status:false
  },
  {
    station: 'station 2',
    location: 'south delhi',
    time:'9:00PM',
    status:false
  },
  {
    station: 'station 3',
    location: 'north delhi',
    time:'9:00AM',
    status:false
  },
  {
    station: 'station 3',
    location: 'north delhi',
    time:'11:00AM',
    status:false
  },
  {
    station: 'station 3',
    location: 'north delhi',
    time:'01:00PM',
    status:false
  },
  {
    station: 'station 3',
    location: 'north delhi',
    time:'3:00PM',
    status:false
  },
  {
    station: 'station 3',
    location: 'north delhi',
    time:'5:00PM',
    status:false
  },
  {
    station: 'station 3',
    location: 'north delhi',
    time:'7:00PM',
    status:false
  },
  {
    station: 'station 3',
    location: 'north delhi',
    time:'9:00PM',
    status:false
  },
  {
    station: 'station 4',
    location: 'central delhi',
    time:'9:00AM',
    status:false
  },
  {
    station: 'station 4',
    location: 'central delhi',
    time:'11:00AM',
    status:false
  },
  {
    station: 'station 4',
    location: 'central delhi',
    time:'01:00PM',
    status:false
  },
  {
    station: 'station 4',
    location: 'central delhi',
    time:'3:00PM',
    status:false
  },
  {
    station: 'station 4',
    location: 'central delhi',
    time:'5:00PM',
    status:false
  },
  {
    station: 'station 4',
    location: 'central delhi',
    time:'7:00PM',
    status:false
  },
  {
    station: 'station 4',
    location: 'central delhi',
    time:'9:00PM',
    status:false
  },
  
];

//Connect to MongoDB
mongoose.connect('mongodb://harshit:scooby1234@ds257077.mlab.com:57077/social-dev', {
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected yeah...'))
  .catch(err => console.log(err));
//Go through each movie
stations.map(data => {
  // Initialize a model with movie data
  const station = new Station(data);
  // and save it into the database
  station.save();
});
module.exports = stations;