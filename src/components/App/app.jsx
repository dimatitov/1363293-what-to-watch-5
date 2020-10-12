import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from "../MainScreen/main-screen";

const App = ({genre, date}) => {
  return (
    <MainScreen genre={genre} date={date}/>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired
};

export default App;
