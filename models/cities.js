const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const locationSchema = require("../models/location");

const citySchema = new mongoose.Schema({
    name: { type: String },
    location: { type: locationSchema },
    places: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Place' }
    ],
    hotels: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }
    ],
    restaurants: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
    ],
});

const City = mongoose.model("City", citySchema);

module.exports = City;