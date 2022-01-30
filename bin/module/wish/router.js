const router = require('express').Router();
const apiHandler = require('./apiHandler');
const apiLimiter = require('../../middleware/rateLimiter');

router.post('/', apiLimiter(10, 1, 'tunggu sebentar (sekitar 10 menit) untuk mengirimkan pesan'), apiHandler.postWish);
router.get('/', apiHandler.listWishes);

module.exports = router;
