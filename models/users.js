const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    wishlistPlaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
    visitedPlaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
    wishlistHotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
    visitedHotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
    wishlistRestaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
    visitedRestaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
});

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({
            _id: this._id,
            name: this.name,
            email: this.email,
        },
        config.get("jwtPrivateKey")
    );
};

module.exports = mongoose.model("User", userSchema);