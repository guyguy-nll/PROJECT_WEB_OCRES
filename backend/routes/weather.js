//source tp5 readapté à la méteo
const express = require("express");
const axios = require("axios");
// Lodash utils library
const _ = require("lodash");

const router = express.Router();
// Clé api
const API_KEY = "c20c3774fe1834487f4425ef7d85e4fd";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//url image ciel
const API_UrlImageCiel = "http://openweathermap.org/img/wn";

// Create RAW data array
let meteos = [];

// On insère un film initial
const meteo = "Paris";
//`${API_URL}?q=${localisation}&appid=${API_KEY}&units=metric`
const url = `${API_URL}?q=${meteo}&appid=${API_KEY}&units=metric`;

// Make a request for a weather
axios.get(url).then(function (response) {
  // handle success
  if (response.data) {
    const {
      coord,
      weather,
      base,
      main,
      visibility,
      wind,
      clouds,
      dt,
      sys,
      timezone,
      id,
      name,
      docs,
    } = response.data;
    meteos.push({
      id: _.uniqueId(),
      meteo: name,
      temp: Math.floor(main.temp),
      humidite: main.humidity, // en minutes,
      vent: wind.speed,
      nuage: clouds.all,
      pression: main.pressure, // en USD$,
      icon: weather.icon,
    });
    
  }
  console.log(meteos);
});

// ...
/* GET weathers listing. */
router.get("/", (req, res) => {
  // Get List of weather and return JSON
  res.status(200).json({ meteos });
});

// .../weathers/86
/* GET one weather. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  // Find weather in DB
  const meteo = _.find(meteos, ["id", loc]);

  if (meteo) {
    // Return weather
    res.status(200).json({
      message: "weather found!",
      meteo,
    });
  } else {
    res.status(404).json({
      message: "weather not found!",
    });
  }
});

// ..../weathers/
/* PUT new weather. */
router.put("/", (req, res) => {
  // Get the data from request from request

  const { meteo } = req.body;

  const url = `${API_URL}?q=${meteo}&appid=${API_KEY}&units=metric`;

  // Make a request for a weather
  axios
    .get(url)
    .then(function (response) {
      // handle success
      if (response.data) {
        const {
          coord,
          weather,
          base,
          main,
          visibility,
          wind,
          clouds,
          dt,
          sys,
          timezone,
          id,
          name,
          docs,
        } = response.data;

        meteos.push({
          id: _.uniqueId(),
          meteo: name,
          temp: Math.floor(main.temp),
          humidite: main.humidity, // en minutes,
          vent: wind.speed,
          nuage: clouds.all,
          icon: weather.icon,
          pression: main.pressure, // en USD$,
        });
      }
      res.json({ meteos });
      console.log(meteos);
    })
    .catch(function (error) {
      // handle error
      res.json({ error });
    });
});

/* DELETE weather. */
router.delete("/:id", (req, res) => {
  // Get the :id of the weather we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(meteos, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`,
  });
});

/* UPDATE weather. */
router.post("/:id", (req, res) => {
  // Get the :id of the weather we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the weather we want to update from the body of the request
  const { meteo } = req.body;
  // Find in DB
  const meteoToUpdate = _.find(meteos, ["id", id]);
  // Update data with new data (js is by address)
  meteoToUpdate.Meteo = meteo;

  // Return message
  res.json({
    message: `Just updated ${id} with ${Meteo}`,
  });
});

module.exports = router;
