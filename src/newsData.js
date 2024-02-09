const mongoose = require('mongoose');

const newsHistorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const news = mongoose.model('NewsHistory', newsHistorySchema);

module.exports = news;
