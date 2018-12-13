const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//27017 is the default mongoDB port
const uri = 'mongodb://admin:smartmeat1@ds249415.mlab.com:49415/smartmeat' 

mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => { 
    console.log('Connected to Mongo');
  },
  err => {
    console.log('error connecting to Mongo: ')
    console.log(err);
  }
)


module.exports = mongoose.connection