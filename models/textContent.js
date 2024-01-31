


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var textContentSchema = new Schema({
    text:{
        type:String,
        required:true
    }
});
