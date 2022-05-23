const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/users");
const Place = require("../models/places");
const Restaurant = require("../models/restaurants");
const Hotel = require("../models/hotels");
const router = express.Router();

router.post("/", async(req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("error");
    user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = user.generateAuthToken();
    res.send('success');
});

router.post("/add-wishlist/:ref", async(req, res) => {
    let user = await User.findOne({ email: req.body.email });
    let found;
    switch (req.params.ref) {
        case "place":
            found = await Place.findOne({ name: req.body.name });
            user.wishlistPlaces.push(found._id);
            break;
        case "res":
            found = await Restaurant.findOne({ name: req.body.name });
            user.wishlistRestaurants.push(foundI._id);
            break;
        case "hotel":
            found = await Hotel.findOne({ name: req.body.name });
            user.wishlistHotels.push(found._id);
            break;
    }
    await user.save();
    res.send("success");
});

router.post("/add-visited/:ref", async(req, res) => {
    let user = await User.findOne({ email: req.body.email });
    let found;
    switch (req.params.ref) {
        case "place":
            found = await Place.findOne({ name: req.body.name });
            user.visitedPlaces.push(found._id);
            break;
        case "res":
            found = await Restaurant.findOne({ name: req.body.name });
            user.visitedRestaurants.push(foundI._id);
            break;
        case "hotel":
            found = await Hotel.findOne({ name: req.body.name });
            user.visitedHotels.push(found._id);
            break;
    }
    await user.save();
    res.send("success");
});

router.get("/:email", async(req, res) => {
    let user = await User.findOne({ email: req.params.email }).populate("wishlistPlaces wishlistRestaurants wishlistHotels visitedPlaces visitedHotels visitedRestaurants");
    res.send(user);
});

module.exports = router;