//source openclassroom réadapté pour l'utiliser pour nos plantes
const Plante = require('../models/Thing');
//on a importe le modele
//on creer les fonctions get, put ...
//creation d'un objet plante (constructeur)
exports.createPlante = (req, res, next) => {
  const plante = new Plante({
    info: req.body.info,
    localisation: req.body.localisation,
    imageUrl: req.body.imageUrl,
    prix: req.body.prix,
    info: req.body.info,
    userId: req.body.userId
  });
  plante.save().then(
    () => {
      res.status(201).json({
        message: 'Post est envoyé'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
// permet de trouver un objet plante correspondant à l'id
exports.getOnePlante = (req, res, next) => {
  Plante.findOne({
    _id: req.params.id
  }).then(
    (plante) => {
      res.status(200).json(plante);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
//permet de trouver un objet plante par localisation
exports.getOneByLocPlante = (req, res, next) => {
  Plante.findOne({
    localisation: req.params.localisation
  }).then(
    (plante) => {
      res.status(200).json(plante);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
// modifier un objet plante
exports.modifyPlante = (req, res, next) => {
  const plante = new Plante({
    _id: req.params.id,
    info: req.body.info,
    localisation: req.body.localisation,
    imageUrl: req.body.imageUrl,
    prix: req.body.prix,
    info: req.body.info,
    userId: req.body.userId
  });
  Plante.updateOne({_id: req.params.id}, plante).then(
    () => {
      res.status(201).json({
        message: 'Plante bien mise à jour!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
//supprimer objet plante de la bdd
exports.deletePlante = (req, res, next) => {
  Plante.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'supprime'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
// recuperer tous les objets plante de la bdd
exports.getAllStuff = (req, res, next) => {
  Plante.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};