const mongoose = require("mongoose");
const locationSchema = require("../models/location");

const hotelSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: locationSchema },
    address: { type: String, default: "" },
    images: [{ type: String }],
    rating: { type: Number, default: 4 },
    price: { type: String },
    description: { type: String },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;