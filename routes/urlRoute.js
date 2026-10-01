const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const urlController = require("../controllers/urlController");
const authMiddleware = require("../Middleware/authMiddleWare");

router.post(
    "/shorten",
    authMiddleware,
    urlController.shortenUrl
);

router.get(
    "/analytics/:shortUrl",
    authMiddleware,
    urlController.getUrlAnalytics
);

router.get(
    "/:shortUrl",
    urlController.redirectToOriginalUrl
);

module.exports = router;