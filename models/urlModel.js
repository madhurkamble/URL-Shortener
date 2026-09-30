const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    visitedHistory: [
        {
            visitedCount: {
                type: Number,
                default: 0
            },
            visitedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
},
    {timestamps: true}
);

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;