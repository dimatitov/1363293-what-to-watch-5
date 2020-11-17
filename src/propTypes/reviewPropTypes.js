import PropTypes from "prop-types";

export const reviewPropTypes = PropTypes.shape({
  film: PropTypes.string.isRequired,
  review: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        nickName: PropTypes.string.isRequired,
        textReview: PropTypes.string.isRequired,
        userRating: PropTypes.string.isRequired,
      })
  )
});
