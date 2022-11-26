//source openclassroom réadapté pour notre projet
const mongoose = require('mongoose');
//modele pour les objets à vendre
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});
//on exporte le modele pour le controllers
module.exports = mongoose.model('Thing', thingSchema);