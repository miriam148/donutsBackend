const mongoose = require("mongoose");

const DonutSchema = new mongoose.Schema({
    
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: false }
});

module.exports = mongoose.model("Donut", DonutSchema);