const router = require('express').Router();
const apiHandler = require('./apiHandler');
const bruteForce = require('../../middleware/bruteLimiter');

router.post('/', bruteForce.prevent, apiHandler.addEmailSubscribe);

module.exports = router;