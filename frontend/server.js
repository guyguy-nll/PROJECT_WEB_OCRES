//source: lien pour trouver icon ciel:https://openweathermap.org/weather-conditions
//souce : lien pour API:https://openweathermap.org/current
//source pour faire son API: https://www.youtube.com/watch?v=V6AArnmODqQ&t=4052s&ab_channel=Basecamp
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
//url image ciel
const API_UrlImageCiel="http://openweathermap.org/img/wn";

//encoder l'url quand on va faire les requetes http
app.use(bodyParser.urlencoded({ extended: true }));
//le html va pouvoir trouver le css et js dans le dossier public
//app.use(express.static("public"));
//template pour afficher les vues
app.set("view engine", "ejs");
//recuperer la clé de connexion pour l'API meteo
require("dotenv").config();
// creation de la methode get
app.get("/", (req, res) => {
  const Donnees={loc:"localisation", temp:"Temp",soleil:"Soleil", humidite:"humidite" };
  res.sendFile(__dirname+"/index.html");
  //res.render("index",{Donnees: Donnees});
});
// creation de la methode post
app.post("/", async (req, res) => {
  //let variable a portée illimitée, elle s'adapte a ce qu'on met dedans
  //localisation prend les valeurs du body de la zone de text ville (html)
  //await c'est qu'il attend qu'on ait fait une saisie
  //await c'est pour les actions qui peuvent etre rejetée ou acceptée
  let localisation = await req.body.ville;
  //lien de l'api et des paramètres: https://openweathermap.org/current
  //units c'est pour avoir les degrés en celcius
  const url = `${API_URL}?q=${localisation}&appid=${API_KEY}&units=metric`;
  //const url =
  //permet de recuperé la réponse en récuperant les données de l'url
  const response = await fetch(url);
  //permet de mettre le body de la réponse en json
  const donneesmeteo = await response.json();
  console.log(donneesmeteo);
  //recupere les donnes de temperature
  const temp= donneesmeteo.main.temp;
  //infos sur le soleil ou les nuages
  const soleil=donneesmeteo.weather[0].description;
  //l'id correspondant à l'icon pour trouver l'image du ciel
  const icon=donneesmeteo.weather[0].icon;
  //url pour trouver image des nuages ou soleil
  const ImageCiel=`${API_UrlImageCiel}/${icon}@2x.png`;
  //affichage dans la console des données méteo
  res.write(`<h1> Meteo pour la ville de ${localisation} est ${soleil}</h1>`);
  res.write(`<h1> la temperature est ${temp} degres</h1>`);
  res.write(`<img src='${ImageCiel}'> `);
  const Donnees={};
  Donnees.loc=localisation;
  Donnees.temp=temp;
  Donnees.soleil=soleil;
  Donnees.humidite=donneesmeteo.main.humidity;
  //res.render('index', {Donnees: Donnees});
});

app.listen(3000, () => {
  console.log("server front lance");
});
