const express = require('express');
const router = express.Router();
const { createShortUrl, getOriginalUrl, getUserURLs } = require('../controllers/urlController');

router.post('/shorten', createShortUrl);
router.get('/user/:userId', getUserURLs);
router.get('/:shortUrl', getOriginalUrl);


module.exports = router;