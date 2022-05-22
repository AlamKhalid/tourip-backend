const { default: axios } = require("axios");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Restaurant = require("../models/restaurants");
const locationSchema = require("../models/location");
const City = require("../models/cities");

router.get("/", async(req, res) => {
    const city = await City.findOne({ name: "Karachi" });
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
        params: {
            latitude: city.location.latitude,
            longitude: city.location.longitude,
            limit: '30',
            currency: 'PKR',
            distance: '10',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US',
        },
        headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '5b58ba035fmshf4aa99b9a16c28ep13789ajsncc271b048c00'
        }
    };
    // let restaurant;
    // const response = await axios.request(options)
    // const data = response.data.data;
    // for (var d in data) {
    //     if (Object.keys(data[d]).length > 8) {
    //         // only create those with properties
    //         try {
    //             restaurant = new Restaurant({
    //                 name: data[d].name,
    //                 location: {
    //                     longitude: data[d].longitude,
    //                     latitude: data[d].latitude,
    //                 },
    //                 description: data[d].ranking,
    //                 rating: data[d].rating,
    //                 phone: data[d].phone,
    //             })
    //             restaurant.images.push(data[d].photo.images.original.url);
    //             if (data[d].address) {
    //                 restaurant.address = data[d].address;
    //             }
    //             await restaurant.save();
    //             city.restaurants.push(restaurant._id);
    //         } catch (ex) {

    //         }
    //     }
    // }
    // await city.save();
    // res.send("Length is " + data.length);
});


module.exports = router;