const mongoose = require('mongoose');
const Station = require('./models/station');

const stations = [
  {
    station: 'station 1',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    location: 'west delhi',
  },
  {
    station: 'station 2',
    poster: 'https://i.imgur.com/pE0C9E0.jpg',
    location: 'south delhi',
  },
  {
    station: 'station 3',
    poster: 'https://i.imgur.com/VqUi1sw.jpg',
    location: 'north delhi',
  },
  {
    station: 'station 4',
    poster: 'https://i.imgur.com/s106X7S.jpg',
    location: 'central delhi',
  },
  {
    station: 'station 5',
    poster: 'https://i.imgur.com/kV2BVdH.jpg',
    location: 'east delhi',
  },
  {
    station: 'station 6',
    poster: 'https://i.imgur.com/a6HJj8S.jpg',
    location: 'central delhi',
  },
  {
    station: 'station 7',
    poster: 'https://i.imgur.com/oOIa73M.jpg',
    location: 'north delhi',
  },
  {
    station: 'station 8',
    poster: 'https://i.imgur.com/kyHDVOk.jpg',
    location: 'south delhi ',
  },
  {
    station: 'station 8',
    poster: 'https://i.imgur.com/GNrdAuF.jpg',
    location: 'east delhi',
  },
  {
    station: 'station 10',
    poster: 'https://i.imgur.com/KhbG0Lw.jpg',
    location: 'west delhi',
  },
  {
    station: 'station 11',
    poster: 'https://i.imgur.com/BTexHYJ.jpg',
    location: 'south delhi',
  },
  {
    station: 'station 12',
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    location: 'east delhi',
  },
  {
    station: 'station 13',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    location: 'north delhi',
  },
  {
    station: 'station 14',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    location: 'west delhi',
  },
  {
    station: 'station 15',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    location: 'central delhi',
  },
  {
    station: 'station 16',
    poster: 'https://i.imgur.com/zOF2iYc.jpg',
    location: 'east delhi',
  },
  {
    station: 'station 17',
    poster: 'https://i.imgur.com/C3ExEb6.jpg',
    location:'south delhi',
  },
  {
    station: 'station 18',
    poster: 'https://i.imgur.com/ejlIijD.jpg',
    location: 'west delhi',
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