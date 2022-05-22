const _ = require("lodash");
const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/users");
const router = express.Router();

// route to login user after validating the credentials
router.post("/", async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("error");
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("error");

    const token = user.generateAuthToken();
    res.send(
        "success"
    );
    // send the jwt, which can be stored in local storage at front-end
});

module.exports = router;