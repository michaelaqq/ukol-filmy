import React from 'react';
import Actor from "../actor/Actor";

function Movie({ title, poster, year, rating, director, genre, cast }) {
    return (
        <>
        <img src={`/assets/${poster}`} alt={title} />
            <h1>{title}</h1>
            <div>
                <><p>Rok vydání</p><p>{year}</p></>
                <><p>Žánr</p><p>{genre}</p></>
                <><p>Režie</p><p>{director}</p></>
            </div>
            <p>{`${rating}/10`}</p>
            <h2>V hlavních rolích</h2>
            <div>{cast.map(actor => <Actor key={actor.as} name={actor.name} as={actor.as} />)}</div>
        </>
    );
}

export default Movie;