import express from 'express';

const connection = require('./conf');

const router = express.Router();


connection.connect((err) => {
  if (err) {
    console.log('Error : ', err);
  } else {
    console.log('Connecté ! ');
  }
});

// Récupérer toutes les données de tout les joueurs.
router.get('/', (req, res) => {
  connection.query('SELECT * FROM scores', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// Création d'un joueur dans la bdd.
router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO scores SET ?', formData, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Récupération des Pseudos et Temps des 10 meilleurs joueurs dans l'ordre ascendant.
router.get('/asc', (req, res) => {
  connection.query('SELECT id, pseudo, game_time from scores ORDER BY game_time ASC LIMIT 10', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// Définit le classement en fonction du temps //
router.get('/score', (req, res) => {
  connection.query('SELECT ranks . * FROM (SELECT @rownum := @rownum +1 \'rank\', p.pseudo, p.click_total, p.game_time FROM scores p, (SELECT @rownum :=0)r ORDER BY game_time ASC) ranks WHERE click_total = ? AND pseudo = ? AND game_time = ?', [req.query.clic, req.query.pseudo, req.query.temps], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

export default router;

