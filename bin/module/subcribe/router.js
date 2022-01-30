const router = require('express').Router();
const apiHandler = require('./apiHandler');
const apiLimiter = require('../../middleware/rateLimiter');

router.post('/', apiLimiter(30, 1, 'tunggu sebentar untuk mengumpulkan email'), apiHandler.addEmailSubscribe);

module.exports = router;