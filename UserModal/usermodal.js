const mongoose = require('mongoose')

const UseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'pls add email id'],
    },
    email: {
        type: String,
        require: [true, 'pls add password']
    },
    project: {
        type: String,
        require: [true, 'pls add email id'],
    },
    message: {
        type: String,
        require: [true, 'pls add password']
    }

});

module.exports = mongoose.model("hemaclient", UseSchema)