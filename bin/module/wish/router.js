const router = require('express').Router();
const apiHandler = require('./apiHandler');
const bruteForce = require('../../util/bruteLimiter');

router.post('/', bruteForce.prevent, apiHandler.postWish);
module.exports = router;