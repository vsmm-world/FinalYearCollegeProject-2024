const mongoose = require('mongoose');


const docContentSchema = new mongoose.Schema({
    doc: {
        type: Array,
    }
});

const DocContent = new mongoose.model('docContent', docContentSchema);
module.exports = DocContent;

