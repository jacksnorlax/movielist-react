import React, { useState, useRef } from 'react';
import Movie from './Movie';
export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First Item",
        rating: 1
    }]);
    console.log(movies);
    const inputRef = useRef();
    const ratingRef = useRef();
    
    function addMovie(event) {
        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        setMovies([...movies, {
            id: newId,
            title: inputRef.current.value,
            rating: ratingRef.current.value
        }])

        inputRef.current.value = "";
        ratingRef.current.value = "";
    }
    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }
    function orderAlphabetically() {
        let copyMovies = [...movies];
        copyMovies.sort(function(a, b){
            if(a.title.toUpperCase() < b.title.toUpperCase()) { return -1; }
            if(a.title.toUpperCase() > b.title.toUpperCase()) { return 1; }
            return 0;
        })
        setMovies(copyMovies);
    };
    function orderRating() {
        let copyMovies = [...movies];
        copyMovies.sort(function(a, b) {
            return a.rating - b.rating;
        })
        setMovies(copyMovies);
    };
    
    return (
        <div>
            <label htmlFor="title">Titel:</label>
            <input type="text" className="form-control" id="title" placeholder="Titel här..." ref={inputRef}></input>
            <label htmlFor="grade">Betyg:</label>
            <select id="grade" className="form-control" ref={ratingRef}>
                <option value="">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button id="save-movie" className="btn btn-success" onClick={addMovie}>
                Spara film
            </button>
            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie}  />)}
            </ul>
            <button id="order-alphabetic" className="btn btn-primary" onClick={orderAlphabetically}>
                Alfabetisk ordning
            </button>
            <button id="order-grade" className="btn btn-primary" onClick={orderRating}>
                Betygsordning
            </button>
        </div>
        
    )
}