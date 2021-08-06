import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchMovies, fetchMoreMovies, moviesSelector } from '../../models/Movies';

import Card from '../../components/Card/Card';

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(moviesSelector);
  const [banner, setBanner] = useState();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movies && movies.data.length > 0) {
      const randomBanner = Math.floor(Math.random() * movies.data.length);
      const bannerUrl = movies.data[randomBanner].Poster;
      setBanner(bannerUrl);
    }
  }, [movies]);

  const handleMoreMovies = () => {
    dispatch(fetchMoreMovies(movies));
  };

  return (
    <>
      <section className="base-section section-banner" style={{ backgroundImage: `linear-gradient(to right, rgB(3,37,65, 0.8) 0%, rgB(3,37,65, 0) 100%), url("${banner}")` }}>
        <div className="section-banner-title">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
      </section>
      <section className="base-section section-movies">
        <div className="section-movies-cards">
          {movies && (
          <InfiniteScroll
            dataLength={movies.data.length}
            next={handleMoreMovies}
            hasMore
          >
            {movies.data.map((item) => (
              <Card
                key={item.imdbID}
                id={item.imdbID}
                title={item.Title}
                image={item.Poster}
                releaseDate={item.Year}
              />
            ))}
          </InfiniteScroll>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
