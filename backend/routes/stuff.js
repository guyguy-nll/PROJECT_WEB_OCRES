const express = require('express');
const router = express.Router();
//on fait charger les fonctions get put du controler
const stuffCtrl = require('../controllers/stuff');

// on associe aux requetes url les différentes fontions
//auth permet d'identifier l'utilisateur avant de 
//passer les fonctions sur les routes
router.get('/', stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;