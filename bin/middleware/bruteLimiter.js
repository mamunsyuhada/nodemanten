const ExpressBrute = require('express-brute');
const MongooseStore = require('express-brute-mongoose');
const BruteForceModel = require('../module/bruteForce/entity');

const store = new MongooseStore(BruteForceModel);
const bruteforce = new ExpressBrute(store);
module.exports = bruteforce;