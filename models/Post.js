const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const FEED = new Schema({
    name: {
        type : String,
        required: true,
        maxlength:15
    },
    message: {
        type : String,
        required: true,
        maxlength:40
    }
},{timestamps:true})

const feed  = mongoose.model('FEED ',FEED);
module.exports=feed ;