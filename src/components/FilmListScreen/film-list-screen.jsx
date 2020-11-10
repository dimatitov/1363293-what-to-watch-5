import React from 'react';
import PropTypes from 'prop-types';
import FilmCardScreen from "../FilmCardScreen/film-card-screen";
import {filmsPropTypes} from "../../prop-types";


const FilmListScreen = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <FilmCardScreen
          title={film.movieTitle}
          movieImg={film.stillFromTheFilm}
          key={film.id}
        />
      ))}
    </div>
  );
};

FilmListScreen.propTypes = {
  films: PropTypes.arrayOf(filmsPropTypes).isRequired,
};

export default FilmListScreen;

