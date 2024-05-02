const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const cities = require("./routes/cities");
const places = require("./routes/places");
const hotels = require("./routes/hotels");
const restaurants = require("./routes/restaurants");
const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost:27017/tourip", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("Error connecting to database...", err);
  });

app.get("/", (req, res) => {
  res.status(200).send({ Message: "Connected", status: 200 });
});

app.use("/api/cities", cities);
app.use("/api/places", places);
app.use("/api/hotels", hotels);
app.use("/api/restaurants", restaurants);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 4000;
app.listen(port, process.env.IP, () => {
  console.log(`Listening at port ${port}...`);
});
