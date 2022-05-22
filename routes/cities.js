const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const City = require("../models/cities");

router.get("/", async(req, res) => {
    const cities = await City.find().populate("places").populate("hotels").populate("restaurants");
    res.send(cities);
});

router.get("/:id", async(req, res) => {
    const city = await City.findById(req.params.id);
    res.send(city);
});


module.exports = router;