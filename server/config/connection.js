const mongoose = require('mongoose');
//Notes: 
//We will add in MONGODB_URI in the .env file from Mark's MongoDB Atlas connection and on Heroku. 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/traderjocks', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
