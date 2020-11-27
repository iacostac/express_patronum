const db = require('../models');

const { Op } = require('sequelize');



const addBook = async (titulo, autor, cover,  precio) => {
    const nuevoLibro = await db.libro.create({
        titulo,
        precio,
        cover: cover,
        autorId: autor
    });

    return nuevoLibro;
}


const getBooks = async () => {
  const libros = await  db.libro.findAll(
      { 
          include: db.autor
      }
  ).then(
    resultados => {
        return resultados
    }
    );
    return libros;
  }


  const search = async ( termino ) => {
      const resultado = await db.libro.findAll({
        where: {
            titulo: {
                [Op.substring]: termino
            }
        }
      }).then(r => {
          return r;
      });
      return resultado;
  }


  const getAuthor = async () => {
    const autor = await  db.autor.findAll(
        {

        }
    ).then(
      resultados => {
          return resultados
      }
      );
      return autor;
    }

    const getBookById = async (id) => {
        const libro = await db.libro.findByPk(id, {
            include: db.autor
        })
                        .then(resultado => {
                            return resultado
                        });

            return libro;
    }

module.exports = {
    getBooks,
    getAuthor,
    getBookById,
    search,
    addBook
}
