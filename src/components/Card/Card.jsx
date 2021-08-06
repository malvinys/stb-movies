import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { setModalMovieImage } from '../../models/Movies';

const Card = ({
  id, title, image, rating, releaseDate,
}) => {
  const dispatch = useDispatch();

  const handleImageClick = (imageUrl) => {
    dispatch(setModalMovieImage(imageUrl));
  };

  return (
    <>
      <div className="base-card">
        <div className="base-card-image">
          <LazyLoadImage src={image} alt={title} effect="blur" onClick={() => handleImageClick(image)} />
        </div>
        {rating && <div className="base-card-rating">{rating}</div>}
        <a href={`/${id}`}>
          <div className="base-card-content">
            <h2>{title}</h2>
            <p>{releaseDate}</p>
          </div>
        </a>
      </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  releaseDate: PropTypes.string,
};

Card.defaultProps = {
  id: null,
  title: null,
  image: null,
  rating: null,
  releaseDate: null,
};

export default Card;
