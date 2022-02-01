const router = require('express').Router();
const apiHandler = require('./apiHandler');
const apiLimiter = require('../../middleware/rateLimiter');

router.post(
  '/',
  apiLimiter(1, 1, 'tunggu sebentar (sekitar 1 menit) untuk mengirimkan pesan'),
  apiHandler.postWish
);
router.get('/delete/:wishId', apiHandler.deleteWish);
router.get('/undelete/:wishId', apiHandler.undeleteWish);
router.get('/', apiHandler.listWishes);

module.exports = router;
