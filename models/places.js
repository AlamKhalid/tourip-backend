const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    images: [{ type: String }]
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;