import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const FilmCard = ({movieImg, title, onAiming}) => {
  return (
    <article className="small-movie-card catalog__movies-card" onChange={onAiming}>
      <div className="small-movie-card__image">
        <img src={movieImg} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/1312`}>{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  movieImg: PropTypes.string.isRequired,
  onAiming: PropTypes.func.isRequired
};

export default FilmCard;

