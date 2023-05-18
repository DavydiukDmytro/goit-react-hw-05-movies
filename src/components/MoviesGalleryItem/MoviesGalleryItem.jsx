import PropTypes from 'prop-types';
import {
  GalleryItem,
  MoveiLink,
  MoveiImg,
  MoveiTitle,
} from './MoviesGalleryItem.styled';
import placeholderImage from 'images/movie.png';

export const MoviesGalleryItem = ({ movie, location, linkTo }) => {
  return (
    <GalleryItem>
      <MoveiLink to={`${linkTo}${movie.id}`} state={{ from: location }}>
        <MoveiImg
          className="img"
          alt={movie.title}
          width="400px"
          src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          onError={e => {
            e.target.src = placeholderImage;
          }}
        />
        <MoveiTitle> {movie.title || 'No name'}</MoveiTitle>
      </MoveiLink>
    </GalleryItem>
  );
};

MoviesGalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
  }),
  location: PropTypes.object,
  linkTo: PropTypes.string.isRequired,
};
