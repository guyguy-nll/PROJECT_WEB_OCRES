const express=require("express");
//on cree une app qui utilise express
const app=express();
//permet d'envoyer des requetes http par body
const bodyPerser=require ("body-parser");
// permet de manipuler des 
const fetch=require("node-fetch");

//encoder l'url quand on va faire les requetes http
app.use(bodyPerser.urlencoded({extended:true}));
//recuperer la clé de connexion pour l'API meteo
require('dotenv').config();
// creation de la methode get
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
// creation de la methode post
app.post("/",async(req,res)=>{
    //let variable a portée illimitée, elle s'adapte a ce qu'on met dedans
    //localisation prend les valeurs du body de la zone de text ville (html)
    //await c'est qu'il attend qu'on ait fait une saisie
    //await c'est pour les actions qui peuvent etre rejetée ou acceptée
   let localisation= await req.body.ville;
   //lien de l'api et des paramètres: https://openweathermap.org/current
   const url='https://api.openweathermap.org/data/2.5/weather?q=${localisation}&appid=${process.env.}';
   const response=await 
});

app.listen(3000,()=>{
    console.log("server front lance");
});