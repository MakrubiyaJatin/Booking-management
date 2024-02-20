const mongoose = require("mongoose");
const { GENDER } = require("../const");


const userSchema = new mongoose.Schema({
    fisrtname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    deletedAt: { type: String, require: false, default: null }
})

const User = mongoose.model('Users', userSchema);

module.exports = { User }