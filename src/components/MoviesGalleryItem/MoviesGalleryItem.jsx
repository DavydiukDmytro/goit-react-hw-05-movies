import PropTypes from 'prop-types';
import {
  GalleryItem,
  MoveiLink,
  MoveiImg,
  MoveiTitle,
} from './MoviesGalleryItem.styled';
import placeholderImage from 'images/movie.png';
import { useLocation } from 'react-router-dom';

export const MoviesGalleryItem = ({ movie }) => {
  const location = useLocation();

  return (
    <GalleryItem>
      <MoveiLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <MoveiImg
          className="img"
          alt={movie.title}
          width="400px"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
              : movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : placeholderImage
          }
        />
        <MoveiTitle>
          {movie.title ||
            movie.name ||
            movie.original_title ||
            movie.original_name ||
            'No name'}
        </MoveiTitle>
      </MoveiLink>
    </GalleryItem>
  );
};

MoviesGalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};
