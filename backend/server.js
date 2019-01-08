const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cors = require('cors'),
cookieParser = require('cookie-parser'),
logger = require('morgan'),



port = process.env.PORT || 3030
dbConnection = require('./database') ,
user = require('./routes/user'),
report = require('./routes/report'),
passport = require('./passport')




app.use(logger('dev'))
app.use(cors())
app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.use('/user', user)

app.use('/report', report)


app.listen(port, ()=>{
  console.log(`Listening on ${port}`)
})


