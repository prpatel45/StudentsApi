const mongoose = require('mongoose');
const schema = mongoose.Schema({
    fname: String,
    lname: String
})

module.exports = mongoose.model("Student",schema);