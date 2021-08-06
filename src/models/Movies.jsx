/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import Request from '../helpers/Request';

export const Movies = createSlice({
  name: 'movies',
  initialState: {
    movies: null,
    movie: null,
    modalMovieImage: null,
    search: {
      keywords: null,
      results: null,
    },
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setModalMovieImage: (state, action) => {
      state.modalMovieImage = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const moviesActions = Movies.actions;
export const moviesSelector = (state) => state.movies;
export const moviesReducer = Movies.reducer;

export const fetchMovies = () => async (dispatch) => {
  const page = 1;
  const defaultMovies = `&s=Batman&page=${page}`;

  const getMovies = await Request.backend('GET', defaultMovies);
  const res = { data: getMovies.Search, page };

  dispatch(moviesActions.setMovies(res));
};

export const fetchMoreMovies = (movies) => async (dispatch) => {
  const { data, page } = movies;
  const nextPage = page + 1;
  const moreMovies = `&s=Batman&page=${nextPage}`;

  const getMoreMovies = await Request.backend('GET', moreMovies);
  const newMovies = [...data];
  for (let index = 0; index < getMoreMovies.Search.length; index++) {
    const movie = getMoreMovies.Search[index];
    newMovies.push(movie);
  }
  const res = { data: newMovies, page: nextPage };

  dispatch(moviesActions.setMovies(res));
};

export const fetchDetailMovie = (id) => async (dispatch) => {
  const res = await Request.backend('GET', `&i=${id}`);

  dispatch(moviesActions.setMovie(res));
};

export const setModalMovieImage = (imageUrl) => async (dispatch) => {
  dispatch(moviesActions.setModalMovieImage(imageUrl));
};

export const fetchSearchMovie = (keywords) => async (dispatch) => {
  if (keywords) {
    const paramQuery = `&s=${keywords}`;

    const res = await Request.backend('GET', `${paramQuery}`);

    dispatch(moviesActions.setSearch({ keywords, data: res.Search }));
  } else {
    dispatch(moviesActions.setSearch({ keywords: null, data: null }));
  }
};
