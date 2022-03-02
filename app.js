const path = require('path');
const logger = require('morgan');
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//conexion a base de datos
const mongodb = 'mongodb://localhost/game';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', require('./routes/index'));
app.use('/', require('./routes/create-user'));
app.use('/gamer', require('./routes/users'));
//app.use('/winner'), require ('./routes/winner')
//app.use('/user', require('./routes/delete-user'));
//app.use('/user', require('./routes/total-change-user'));
//app.use('/user', require('./routes/partial-change-user'));

module.exports = app;
