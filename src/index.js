import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

const filmInformation = {
  genre: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App genre={filmInformation.genre} date={filmInformation.releaseDate} />,
    document.getElementById(`root`)
);
