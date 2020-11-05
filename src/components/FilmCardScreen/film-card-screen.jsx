import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const FilmCardScreen = ({films}) => {
  return (
    <Fragment>
      <div className="catalog__movies-list">
        <article className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img src="/img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
          </h3>
        </article>
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </Fragment>
  );
};

FilmCardScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        stillFromTheFilm: PropTypes.string.isRequired,
        movieTitle: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        filmCover: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseYear: PropTypes.string.isRequired,
        descriptionFilm: PropTypes.string.isRequired,
        movieRating: PropTypes.string.isRequired,
        numberOfReview: PropTypes.string.isRequired,
        cast: PropTypes.string.isRequired,
        producer: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        previewVideo: PropTypes.string.isRequired,
        fullVideo: PropTypes.string.isRequired,
      })
  ),
};

export default FilmCardScreen;

