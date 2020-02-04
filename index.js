'use strict' ;


const server = require('./lib/server.js');
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://http:localhost:27017/lab11';

const mongooseOptions = {
  useNewUrlParser: true ,
  useCreateIndex: true ,
  useUnifiedTopology: true,
 
};

mongoose.connect( MONGODB_URI , mongooseOptions);
server.start();