const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cors = require('cors'),
port = process.env.PORT || 3030,
dbConnection = require('./database') ,
// user = require('./routes/user'),
session = require('express-session')
// passport = require('./passport'),
// MongoStore = require('connect-mongo')(session)


app.listen(port)