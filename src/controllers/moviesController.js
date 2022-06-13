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

    },
    detail: (req, res)=>{
    db.Pelicula.findByPk(req.params.id)
    .then(function(movie){
        res.render("moviesDetail", {movie: movie})
    })
    },
    new: (req, res)=>{
        db.Pelicula.findAll({
            order: [
                ["release_date", "DESC"]
            ]
        },
    
            
        )
        .then(function(movies){
            res.render("newestMovies", {movies: movies})
        })
    },
    recomended: (req, res) => {
        db.Pelicula.findAll({ 
            order: [
                ["rating", "DESC"]
            ],
            limit: 5
            },
        )
        .then(function(movies){
            res.render("recommendedMovies", {movies:movies})
        })
    }
}

module.exports = moviesController;