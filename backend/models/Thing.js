//source openclassroom réadapté pour l'utiliser pour nos plantes
const mongoose = require('mongoose');
//modele pour nos plantes (bdd)
const planteSchema = mongoose.Schema({
  nom: { type: String, required: true },
    localisation: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    info: { type: String, required: true },
    prix: { type: Number, required: true },
});
//on exporte le modele pour le controllers
module.exports = mongoose.model('Thing', planteSchema);