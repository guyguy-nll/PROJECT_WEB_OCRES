//source openclassroom réadapté pour l'utiliser pour nos plantes
const express = require('express');
const router = express.Router();
//on fait charger les fonctions get put du controler
const stuffFonc = require('../controllers/plant');

// on associe aux requetes url les différentes fontions 
//passer les fonctions sur les routes pour nos plantes
router.get('/', stuffFonc.getAllStuff);
router.post('/', stuffFonc.createPlante);
router.get('/:id', stuffFonc.getOnePlante);
router.get('/:localisation', stuffFonc.getOneByLocPlante);
router.put('/:id', stuffFonc.modifyPlante);
router.delete('/:id', stuffFonc.deletePlante);

module.exports = router;