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

export const MovieInfo = ({ movie }) => {
  return (
    <ContainerInfo>
      <Img
        className="img"
        alt={movie.original_title}
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
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
    original_title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
