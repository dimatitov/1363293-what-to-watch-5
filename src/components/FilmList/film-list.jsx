import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../FilmCard/film-card";
import {filmsPropTypes} from "../../propTypes/filmsPropTypes";


const FilmList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <FilmCard
          title={film.movieTitle}
          movieImg={film.stillFromTheFilm}
          key={film.id}
          onAiming={() => {}}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmsPropTypes).isRequired,
};

export default FilmList;

