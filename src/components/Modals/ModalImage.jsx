import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { setModalMovieImage, moviesSelector } from '../../models/Movies';

const ModalImage = () => {
  const dispatch = useDispatch();
  const { modalMovieImage } = useSelector(moviesSelector);

  const handleCloseClick = () => {
    dispatch(setModalMovieImage(null));
  };

  return (
    <>
      {modalMovieImage && (
        <div className="base-modal">
          <div className="base-modal-content">
            <div className="base-modal-content-image">
              <button type="button" className="base-modal-close" onClick={() => handleCloseClick()}>x</button>
              <LazyLoadImage src={modalMovieImage} alt={modalMovieImage} effect="blur" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalImage;
