import PropTypes from 'prop-types';
import {
  ContainerInfo,
  TextInfo,
  Img,
  Title,
  SubTitle,
  Text,
  ListIItem,
} from './MovieInfo.styled';
import placeholderImage from 'images/movie.png';

export const MovieInfo = ({ movie }) => {
  return (
    <ContainerInfo>
      <Img
        className="img"
        alt={movie.title}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
            : placeholderImage
        }
      />
      <TextInfo>
        <Title>{movie.original_title}</Title>
        <SubTitle>Overview</SubTitle>
        <Text>{movie.overview}</Text>
        <SubTitle>Genres</SubTitle>
        {movie.genres && (
          <ul>
            {movie.genres.map(genre => (
              <ListIItem key={genre.id}>{genre.name}</ListIItem>
            ))}
          </ul>
        )}
      </TextInfo>
    </ContainerInfo>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
