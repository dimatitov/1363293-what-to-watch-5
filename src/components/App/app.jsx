import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from "../MainScreen/main-screen";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginScreen from "../LoginScreen/login-screen";
import MyListScreen from "../MyListScreen/my-list-screen";
import MovieScreen from "../MovieScreen/movie-screen";
import AddReviewToMovieScreen from "../AddReviewToMovieScreen/add-review-to-movie-screen";
import PlayerMovieScreen from "../PlayerMovieScreen/palyer-movie-screen";
import {filmsPropTypes, reviewPropTypes} from "../../prop-types";

const App = ({genre, date, films, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainScreen genre={genre} date={date} films={films}/>
        </Route>
        <Route exact path={`/login`}>
          <LoginScreen/>
        </Route>
        <Route exact path={`/mylist`}>
          <MyListScreen films={films}/>
        </Route>
        <Route exact path={`/films/:id`}>
          <MovieScreen films={films} review={reviews}/>
        </Route>
        <Route exact path={`/films/:id/review`}>
          <AddReviewToMovieScreen/>
        </Route>
        <Route exact path={`/player/:id`}>
          <PlayerMovieScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmsPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired
};

export default App;

