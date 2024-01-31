const mongoose = require('mongoose');

const videoContentSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true
    },
    video: {
        type: Array,
    }
});

const VideoContent = new mongoose.model('videoContent', videoContentSchema);
module.exports = VideoContent;
