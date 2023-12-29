const {Router} = require('express');
const router = Router();
const movies = require('../sample.json');
const _ = require('underscore');


router.get('/',(req, res)=>{
    res.json(movies);
});

router.post('/',(req, res)=>{
    const {title,director,year,genre} = req.body;
    if(title && director && year && genre){
       const id = movies.length +1;
        const newMovie={...req.body, id};
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error:"There was an error."});
    }
});

router.delete('/:id',(req, res)=>{
    const {id} = req.params;
    _.each(movies,(movie, i)=>{
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    res.json(movies);
});

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {title,director,year,genre} = req.body;
    if(title && director && year && genre){
        _.each(movies,(movie, i)=>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.genre = genre;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: "There was an error"});
    }
});

module.exports = router;