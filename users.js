'use strict ';
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken'); //  is a compact URL-safe means of representing claims to be transferred between two parties. 

let SECRET = 'cool bayan ';        // conjuction with jwt   //layer of security
                                    //  we will use it in environment later
let db = {};  //some data                                  // we make fake database
let users = {}; //some users 

users.save() = async fanction (record) {  //we want to bcrybt operation
    
if (!db[record.username]) {
    record.password = await bcrypt.hash(record.password, 5);
    // give me back some information that i can use it with my hash

    db[record.username] = record;//our method not data base yet !
    return record;
  }

  return Promise.reject();
}

users.authenticateBasic = async function(user,pass) {
  let valid = await bcrypt.compare(pass, db[user].password);
  return valid ? db[user] : Promise.reject();
}

users.generateToken = function(user) {
  let token = jwt.sign({ username: user.username}, SECRET);
  return token;
}

users.list = () => db;

module.exports = users;