const { Schema, model } = require("mongoose");

const loginModel =new Schema ({
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

module.exports = model("Login", loginModel);