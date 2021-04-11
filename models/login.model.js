const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginModel = Schema ({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = model("Login")