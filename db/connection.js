const mongoose = require('mongoose');

const uri = process.env.MONOG_DB_URI || 'mongodb+srv://ravindra:rvrvrv@cluster0.y3ybjan.mongodb.net/?retryWrites=true&w=majority'

const ConnectDB = async () => {
    await mongoose.connect(uri).then(() => {
        console.log('Connected to Database');
    })
}

module.exports = ConnectDB;


