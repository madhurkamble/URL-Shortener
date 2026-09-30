const shortid = require("shortid");
const Url = require("../models/urlModel");

exports.getHomePage = async (req, res) => {
    try {
        const urls = await Url.find();
        res.render("index", { urls });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;

    try {
        const shortUrl = shortid.generate();

        await Url.create({
            originalUrl,
            shortUrl,
            visitedHistory: []
        });

        return res.status(201).json({ shortUrl });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.redirectToOriginalUrl = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const url = await Url.findOne({ shortUrl });
        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        }

        const visitedEntry={
            visitedCount:url.visitedHistory.length + 1,
            visitedAt: new Date()
        }

        url.visitedHistory.push(visitedEntry);
        await url.save();

        return res.redirect(url.originalUrl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUrlAnalytics = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const url = await Url.findOne({ shortUrl });
        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        }
        return res.status(200).json({ 
            totalClicks: url.visitedHistory.length,
            analytics: url.visitedHistory
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};