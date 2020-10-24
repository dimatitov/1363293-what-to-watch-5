import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from "../MainScreen/main-screen";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginScreen from "../LoginScreen/login-screen";
import MyListScreen from "../MyListScreen/my-list-screen";
import MovieScreen from "../MovieScreen/movie-screen";
import AddReviewToMovieScreen from "../AddReviewToMovieScreen/add-review-to-movie-screen";
import PlayerMovieScreen from "../PlayerMovieScreen/palyer-movie-screen";

const App = ({genre, date}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainScreen genre={genre} date={date}/>
        </Route>
        <Route exact path={`/login`}>
          <LoginScreen/>
        </Route>
        <Route exact path={`/mylist`}>
          <MyListScreen/>
        </Route>
        <Route exact path={`/films/:id`}>
          <MovieScreen/>
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
  date: PropTypes.number.isRequired
};

export default App;

