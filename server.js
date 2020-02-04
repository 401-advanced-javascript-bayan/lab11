'use strict';
const express = require('express');
const basicAuth = require('./basic-auth-middleware.js');
const users = require('./users.js');
const mongoos = require('mongoose');
const app = express();
app.use(express.json());








app.listen(3000, () => console.log('server up'));