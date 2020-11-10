import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmCardScreen = ({movieImg, title}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={movieImg} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/1312`}>{title}</Link>
      </h3>
    </article>
  );
};

FilmCardScreen.propTypes = {
  title: PropTypes.string.isRequired,
  movieImg: PropTypes.string.isRequired
};

export default FilmCardScreen;

