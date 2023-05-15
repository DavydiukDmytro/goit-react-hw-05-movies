import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from 'services/api';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie(movieId);
  }, [movieId]);

  const fetchMovie = async id => {
    try {
      const response = await getMovie(id);
      if (response) {
        setMovie(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>{movie.original_title}</h1>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      {movie.genres && (
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
      <p>Additional information</p>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
