const express = require("express");
//on cree une app qui utilise express
const app = express();
//permet d'envoyer des requetes http par body
const bodyParser = require("body-parser");
// permet de manipuler des
//le require marchait pas on a trouvé une autre manière de require
const fetch = require("node-fetch");

// Clé api
const API_KEY = "c20c3774fe1834487f4425ef7d85e4fd";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

//encoder l'url quand on va faire les requetes http
app.use(bodyParser.urlencoded({ extended: true }));
//recuperer la clé de connexion pour l'API meteo
require("dotenv").config();
// creation de la methode get
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// creation de la methode post
app.post("/", async (req, res) => {
  //let variable a portée illimitée, elle s'adapte a ce qu'on met dedans
  //localisation prend les valeurs du body de la zone de text ville (html)
  //await c'est qu'il attend qu'on ait fait une saisie
  //await c'est pour les actions qui peuvent etre rejetée ou acceptée
  let location = await req.body.ville;
  //lien de l'api et des paramètres: https://openweathermap.org/current
  const url = `${API_URL}?q=${location}&appid=${API_KEY}`;
  //const url =
  //permet de recuperé la réponse en récuperant les données de l'url
  const response = await fetch(url);
  //permet de mettre le body de la réponse en json
  const donneesmeteo = await response.json();
  //affichage dans la console des données méteo
  console.log(donneesmeteo);
  res.send("Merci");
});

app.listen(3000, () => {
  console.log("server front lance");
});
