import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

const descriptionPromoFilm = {
  FILM_GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
    <App genre={descriptionPromoFilm.FILM_GENRE} date={descriptionPromoFilm.RELEASE_DATE} />,
    document.getElementById(`root`)
);
