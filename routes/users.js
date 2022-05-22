const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/users");
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

module.exports = router;