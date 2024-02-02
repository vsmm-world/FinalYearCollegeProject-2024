const mongoose = require('mongoose');

const adminUP = new mongoose.Schema({
    LanguageName: {

        type: String,
        required: true,
    },
    VideoEmbed: {
        type: String,

    },
    LanguageText: {
        type: String,
    },
    LangauageDoc: {
        type: String,
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Langauage = new mongoose.model('Languages', adminUP);
module.exports = Langauage;
