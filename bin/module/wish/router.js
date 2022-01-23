const router = require('express').Router();
const apiHandler = require('./apiHandler');

router.post('/', apiHandler.postWish);
module.exports = router;