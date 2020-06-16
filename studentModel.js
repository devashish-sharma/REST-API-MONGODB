//Import mongoose
var mongoose = require('mongoose');
//create Student Schema
var studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
            
    },
    std: {
        type: Number,
        required: true
    }
});

var Student = module.exports = mongoose.model('Student', studentSchema);
module.exports.get = function (callback, limit) {
    Student.find(callback).limit(limit);
}