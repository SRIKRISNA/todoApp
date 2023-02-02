const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
})
const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel;