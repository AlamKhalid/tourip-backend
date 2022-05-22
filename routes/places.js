const { default: axios } = require("axios");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Place = require("../models/places");

router.get("/", async(req, res) => {
    // const options = {
    //     method: 'GET',
    //     url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    //     params: { query: 'Clifton Beach', lang: 'en_US', units: 'km' },
    //     headers: {
    //         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    //         'X-RapidAPI-Key': '5b58ba035fmshf4aa99b9a16c28ep13789ajsncc271b048c00'
    //     }
    // };
    // const response = await axios.request(options)
    // const place = new Place({
    //     data: response.data.data.Typeahead_autocomplete.results[2]
    // });
    // await place.save()
    // res.send(place);

});


module.exports = router;