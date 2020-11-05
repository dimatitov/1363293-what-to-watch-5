import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from "../MainScreen/main-screen";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginScreen from "../LoginScreen/login-screen";
import MyListScreen from "../MyListScreen/my-list-screen";
import MovieScreen from "../MovieScreen/movie-screen";
import AddReviewToMovieScreen from "../AddReviewToMovieScreen/add-review-to-movie-screen";
import PlayerMovieScreen from "../PlayerMovieScreen/palyer-movie-screen";

const App = ({genre, date, films, reviews}) => {
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
  date: PropTypes.number.isRequired,
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        film: PropTypes.string.isRequired,
        review: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              nickName: PropTypes.string.isRequired,
              textReview: PropTypes.string.isRequired,
              userRating: PropTypes.string.isRequired,
            })
        )
      })
  )
};

export default App;

