const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app=express();
// on appelle les routes
const stuffRoutes=require('./routes/stuff');

// connection à la bdd
mongoose.connect('mongodb+srv://MatthieuGascon:Projet@cluster0.v5vriz2.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
// on met les droits pour les requetes post etc
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());
  // on enregistre les routes 

app.use('/api/stuff', stuffRoutes);
module.exports=app;