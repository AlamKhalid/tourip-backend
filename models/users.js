const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'model_type' }],
    visited: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'model_type' }],
    model_type: { type: String, enum: ['Place', 'Restaurant', 'Hotel'] }
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