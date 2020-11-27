const mongoose = require("mongoose");
      
const RegisterSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true }
});

module.exports = mongoose.model("Register", RegisterSchema);