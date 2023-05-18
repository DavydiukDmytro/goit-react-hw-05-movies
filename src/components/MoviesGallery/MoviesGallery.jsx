import PropTypes from 'prop-types';
import { Gallery } from './MoviesGallery.styled';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem';

export const MoviesGallery = ({ moviesArr, location, linkTo }) => {
  return (
    <Gallery>
      {moviesArr.map(trandingMovie => (
        <MoviesGalleryItem
          key={trandingMovie.id}
          movie={trandingMovie}
          location={location}
          linkTo={linkTo}
        />
      ))}
    </Gallery>
  );
};

MoviesGallery.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
  location: PropTypes.object,
  linkTo: PropTypes.string.isRequired,
};
