


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textContentSchema = new Schema({
    language: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const TextContent = mongoose.model('TextContent', textContentSchema);
module.exports = TextContent;
