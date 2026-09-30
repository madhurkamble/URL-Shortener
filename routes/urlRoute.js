const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.get('/', urlController.getHomePage);
router.post('/shorten', urlController.shortenUrl);
router.get('/:shortUrl', urlController.redirectToOriginalUrl);
router.get('/analytics/:shortUrl', urlController.getUrlAnalytics);
module.exports = router;