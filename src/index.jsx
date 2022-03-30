import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from "./componensts/header/Header";
import MovieList from "./componensts/movieList/MovieList";
import movies from "./movies";

const App = () => (
  <>
    <Header />
    <MovieList movies={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
