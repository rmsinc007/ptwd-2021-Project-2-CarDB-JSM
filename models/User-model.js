const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  city:  { type: String, required: true },
  state: { type: String, required: true }
});

const User = model('User', userSchema);

module.exports = User;