const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceSchema = new mongoose.Schema({
  id: String,
  fixedPrice: Number,
  percentPrice: Number,
});

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  factor: {
    city: { type: Number, required: true },
    region: { type: Number, required: true },
    country: { type: Number, required: true },
  },
  services: { type: [serviceSchema], required: true },
  cities: { type: [String], required: true },
});

const Company = mongoose.model("company", companySchema);

module.exports = Company;
