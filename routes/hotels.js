const { default: axios } = require("axios");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Hotel = require("../models/hotels");
const locationSchema = require("../models/location");
const City = require("../models/cities");

router.get("/", async(req, res) => {
    const city = await City.findOne({ name: "Karachi" });
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
        params: {
            latitude: city.location.latitude,
            longitude: city.location.longitude,
            lang: 'en_US',
            limit: '30',
            currency: 'PKR'
        },
        headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '5b58ba035fmshf4aa99b9a16c28ep13789ajsncc271b048c00'
        }
    };
    // let hotel;
    // const response = await axios.request(options)
    // const data = response.data.data;
    // for (var d in data) {
    //     if (Object.keys(data[d]).length > 8) {
    //         // only create those with properties
    //         try {
    //             hotel = new Hotel({
    //                 name: data[d].name,
    //                 location: {
    //                     longitude: data[d].longitude,
    //                     latitude: data[d].latitude,
    //                 },
    //                 description: data[d].ranking,
    //                 rating: data[d].rating,
    //                 price: data[d].price,

    //             })
    //             hotel.images.push(data[d].photo.images.original.url);
    //             if (data[d].photo) {
    //                 hotel.address = data[d].photo.caption;
    //             }
    //             await hotel.save();
    //             city.hotels.push(hotel._id);
    //         } catch (ex) {

    //         }
    //     }
    // }
    // await city.save();
    // res.send(data);
});


module.exports = router;