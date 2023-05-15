import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

  const fetchCast = async id => {
    try {
      const response = await getMovieCredits(id);
      if (response) {
        setCastList(response.cast);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      {castList.map(cast => (
        <li key={cast.cast_id}>
          <p>Name:</p>
          <p>{cast.name}</p>
          <p>Character:</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
