const router = require('express').Router();
const apiHandler = require('./apiHandler');
const apiLimiter = require('../../middleware/rateLimiter');

router.post('/', apiLimiter(5, 1, 'limited, wait for 5 minutes'), apiHandler.postWish);
router.get('/', apiHandler.listWishes);

module.exports = router;
