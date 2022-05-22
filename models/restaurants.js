const mongoose = require("mongoose");
const locationSchema = require("../models/location");

const restaurantSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: locationSchema },
    address: { type: String, default: "" },
    images: [{ type: String }],
    rating: { type: Number, default: 4 },
    phone: { type: String, default: "051 0404040" },
    description: { type: String },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;