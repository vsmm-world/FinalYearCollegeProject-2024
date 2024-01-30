const mongoose = require('mongoose');

const adminUP = new mongoose.Schema({
    LanguageName: {

        type: String,
        required: true,
    },
    VideoEmbed: {
        type: String,
        required: true,

    },
    LanguageText: {
        type: String,
        required: true,
    },
    LangauageDoc: {
        type: Array,
        required: true,
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Langauage = new mongoose.model('Languages', adminUP);
module.exports = Langauage;
