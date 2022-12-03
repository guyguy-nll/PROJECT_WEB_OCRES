//source tp5 readapté à la méteo
const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

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

// Make a request for a movie
axios.get(url)
.then(function (response) {
  // handle success
  if(response.data){
    const {coord, weather, base, main, visibility, wind,clouds,dt,sys,timezone,id,name,docs} = response.data;

    meteos.push({
      id: _.uniqueId(),
      meteo: name,
      temp: main.temp,
      humidite: main.humidity, // en minutes,
      vent: wind.speed,
      
      pression: main.pressure // en USD$,
      
    });
  }
  console.log(meteos);
});

// .../movies/
/* GET movies listing. */
router.get('/', (req, res) => {
  // Get List of movie and return JSON
  res.status(200).json({ meteos });
});

// .../movies/86
/* GET one movie. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Find movie in DB
  const meteo = _.find(meteos, ["id", loc]);

  if(meteo) {
    // Return movie
    res.status(200).json({
      message: 'movie found!',
      meteo
    });
  } else {
    res.status(404).json({
      message: 'movie not found!'
    });
  }
});

// ..../movies/
/* PUT new movie. */
router.put('/', (req, res) => {
  // Get the data from request from request


  const { meteo } = req.body;
  
  const url = `${API_URL}?q=${meteo}&appid=${API_KEY}&units=metric`;

  // Make a request for a movie
  axios.get(url)
  .then(function (response) {
      // handle success
      if(response.data){
        const {coord, weather, base, main, visibility, wind,clouds,dt,sys,timezone,id,name,docs} = response.data;
    
        meteos.push({
          id: _.uniqueId(),
          meteo: name,
          temp: main.temp,
          humidite: main.humidity, // en minutes,
          vent: wind.speed,
          
          pression: main.pressure // en USD$,
          
        });
      }
    res.json({meteos});
    })
  .catch(function (error) {
    // handle error
    res.json({error});
  }); 
});

/* DELETE movie. */
router.delete('/:id', (req, res) => {
  // Get the :id of the movie we want to delete from the params of the request
  const { id} = req.params;
  
  // Remove from "DB"
  _.remove(meteos, ["id", id]);
  
  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});

/* UPDATE movie. */
router.post('/:id', (req, res) => {
  // Get the :id of the movie we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the movie we want to update from the body of the request
  const { meteo } = req.body;
  // Find in DB
  const meteoToUpdate = _.find(meteos, ["id", id]);
  // Update data with new data (js is by address)
  meteoToUpdate.Meteo = meteo;
  
  // Return message
  res.json({
    message: `Just updated ${id} with ${Meteo}`
  });
});

module.exports = router;
