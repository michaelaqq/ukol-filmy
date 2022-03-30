import React from 'react';
import Movie from "../movie/Movie";

function MovieList({ movies }) {
    return (
        <div>{movies.map(movie => (
            <Movie
                key={movie.title}
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                rating={movie.rating}
                director={movie.director}
                genre={movie.genre}
                cast={movie.cast}
            />
            ))}
        </div>)
}

export default MovieList;