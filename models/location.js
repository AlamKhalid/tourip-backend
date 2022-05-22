const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    longitude: { type: Number },
    latitude: { type: Number },
});

module.exports = locationSchema;