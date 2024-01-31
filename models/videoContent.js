const mongoose = require('mongoose');

const videoContentSchema = new mongoose.Schema({
    video: {
        type: Array,
    }
});