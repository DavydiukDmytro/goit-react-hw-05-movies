import { Item, Img, Title, Text } from './CastListItem.styled';
import placeholderImage from 'images/movie.png';

export const CastListItem = ({ cast }) => {
  return (
    <Item>
      <Img
        className="img"
        alt={cast.name}
        src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
        onError={e => {
          e.target.src = placeholderImage;
        }}
      />
      <Title>Name:</Title>
      <Text>{cast.name}</Text>
      <Title>Character:</Title>
      <Text>{cast.character}</Text>
    </Item>
  );
};
