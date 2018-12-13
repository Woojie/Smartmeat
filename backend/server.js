const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cors = require('cors'),
port = process.env.PORT || 3030,
dbConnection = require('./database') ,
user = require('./routes/user'),
session = require('express-session'),
passport = require('./passport'),
cookieParser = require('cookie-parser'),
logger = require('morgan')

// MongoStore = require('connect-mongo')(session)


app.use(logger('dev'))
app.use(cors());
app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.use('/user', user)


app.listen(port, ()=>{
  console.log(`Listening on ${port}`)
})


