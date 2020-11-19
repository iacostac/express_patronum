var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { titulo: 'Blockbuster' });
});


router.get('/agregar', (req, res) => {
  // res.sender('estas en agregar');
  res.render('pages/agregar', {titulo: 'estas en agregar'});
});


router.get('/busqueda_proceso', (req, res) => {
  console.log(req.query.termino);
  res.send('vas bien');
  // res.render('pages/agregar', {titulo: 'estas en agregar'});
});


router.post('/agregar_proceso',(req,res) => {
  console.log(req.body);
  res.send('vas bien, estas en el POST');
});

module.exports = router;
