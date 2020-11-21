var express = require('express');
var router = express.Router();
const api = require('../api/api')
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


router.get('/test', async (req, res) => {
  // Acá llamamos a getBooks
  // console.log(api.getBooks());
  
  const todosLibros = await api.getBooks();
  res.send(todosLibros);
});



router.get('/autores', async (req, res) => {
  // Acá llamamos a getBooks
  // console.log(api.getBooks());
  
  const autores = await api.getAuthor();
  res.send(autores);
});


router.get('/libro/:id', async (req, res) => {

  const id = req.params.id;
  // res.send(`vas bien buscate ${id}`);
  const libro = await api.getBookById(id);

  res.send(libro);

  
});
module.exports = router;
