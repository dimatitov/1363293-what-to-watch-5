import PropTypes from "prop-types";

export const filmsPropTypes = PropTypes.shape({
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
});
