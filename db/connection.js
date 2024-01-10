const mongoose = require('mongoose');

const uri = process.env.MONOG_DB_URI;


const ConnectDB = async  ()=>{
    await mongoose.connect(uri).then(()=>{
        console.log('Connected to Database');
    })
}

module.exports = ConnectDB;


