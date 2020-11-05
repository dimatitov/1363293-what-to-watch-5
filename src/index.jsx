import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import films from './mocks/films';
import reviews from "./mocks/reviews";

const filmInformation = {
  genre: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App genre={filmInformation.genre} date={filmInformation.releaseDate} films={films} reviews={reviews} />,
    document.getElementById(`root`)
);
