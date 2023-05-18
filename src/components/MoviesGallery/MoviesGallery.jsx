import PropTypes from 'prop-types';
import { Gallery } from './MoviesGallery.styled';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem';

export const MoviesGallery = ({ moviesArr }) => {
  return (
    <Gallery>
      {moviesArr.map(trandingMovie => (
        <MoviesGalleryItem key={trandingMovie.id} movie={trandingMovie} />
      ))}
    </Gallery>
  );
};

MoviesGallery.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
MoviesGallery.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
