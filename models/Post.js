const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    tittle:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: Date.now
    }
});
module.exports = mongoose.model('post', PostSchema)