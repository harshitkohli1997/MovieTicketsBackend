const express =  require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');


  require('./controllers/stations');
const Station = require('./models/station')
  // Connect to MongoDB
mongoose.connect('mongodb://harshit:scooby1234@ds257077.mlab.com:57077/social-dev', {
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

   

// Initialize http server
const app = express();

app.get('/show', (req,res) => {
   Station.find({status:false})
   .then(station => {
     res.json(station);
   })
});

app.put('/book/:id', (req, res) => {
  Station.findOne({
    _id: req.params.id
  })
  .then(stn => {
    // new values
    stn.status = true;
   stn.save()
   .then(stn => {
     console.log('booking is req');
   })
    // userno = req.body.userno;
  });
    // stn.save()
    //   .then(stn => {
    //     console.log('booking is requested');
    //   })
  });


// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

