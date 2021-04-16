const mongoose = require('mongoose');
const {Schema, model} = mongoose.Schema;

const vehicleSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true},
  year: { type: Number, required: true},
  style: { type: String }  
});

const User = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;