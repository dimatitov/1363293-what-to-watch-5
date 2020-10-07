import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

const DescriptionPromoFilm = {
  FILM_GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
    <App genre={DescriptionPromoFilm.FILM_GENRE} date={DescriptionPromoFilm.RELEASE_DATE} />,
    document.getElementById(`root`)
);
