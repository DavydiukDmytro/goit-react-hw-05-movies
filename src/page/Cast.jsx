import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieCredits } from 'services/api';
import { CastListItem } from 'components/CastListItem';
import { List, Title } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);
  const [error, setError] = useState(null);
  const controllerRef = useRef(new AbortController());
  const controller = controllerRef.current;

  useEffect(() => {
    fetchCast(movieId, controller.signal);
    return () => {
      controller.abort();
    };
  }, [controller, movieId]);

  const fetchCast = async (id, signal) => {
    try {
      const response = await getMovieCredits(id, signal);
      setCastList(response?.cast || null);
      setError(response?.message || null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {castList && (
        <List>
          {castList.map(cast => (
            <CastListItem key={cast.cast_id} cast={cast} />
          ))}
        </List>
      )}
      {error && (
        <>
          <Title>Oops, something went wrong, please try again later.</Title>
          <p>Error: {error}</p>
        </>
      )}
    </>
  );
};

export default Cast;
