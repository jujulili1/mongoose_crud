const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {type : String},
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
});

const User = mongoose.model('users', UserSchema);

module.exports = User;