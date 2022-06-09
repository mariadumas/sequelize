const db = require("../database/models")

const moviesController = {
    list: (req, res)=>{
        db.Pelicula.findAll()
        .then(function(movies){
            res.render("moviesList", {movies: movies})  
        })
        .catch(function(error){
            console.log(error);

        })

    }

}

module.exports = moviesController;