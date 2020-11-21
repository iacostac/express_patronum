const db = require('../models');

const getBooks = async () => {
  const libros = await  db.libro.findAll(
      {
      }
  ).then(
    resultados => {
        return resultados
    }
    );
    return libros;
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
    getBookById
}
