const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("region", regionSchema);
