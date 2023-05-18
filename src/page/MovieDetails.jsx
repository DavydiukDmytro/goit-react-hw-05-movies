import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovie } from 'services/api';
import { Suspense } from 'react';
import { BackLink, SubTitle, LinkTo } from './MovieDetails.styled';
import { MovieInfo } from 'components/MovieInfo';
import { ThreeDots } from 'react-loader-spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const controllerRef = useRef(new AbortController());
  const controller = controllerRef.current;

  useEffect(() => {
    fetchMovie(movieId, controller.signal);

    return () => {
      controller.abort();
    };
  }, [controller, movieId]);

  const fetchMovie = async (id, signal) => {
    try {
      const response = await getMovie(id, signal);
      if (response.id) {
        setMovie(response);
      }
      setError(response?.message || null);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <>
      <BackLink to={backLinkLocation.current}>Back</BackLink>
      {movie && (
        <>
          <MovieInfo movie={movie} />
          <SubTitle>Additional information</SubTitle>
          <LinkTo to={`cast`}>Cast</LinkTo>
          <LinkTo to={`reviews`}>Reviews</LinkTo>
        </>
      )}
      {error && (
        <>
          <h1 className="title">
            Oops, something went wrong, please try again later.
          </h1>
          <p style={{ textAlign: 'center' }}>Error: {error}</p>
        </>
      )}
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#9fa9b5"
            ariaLabel="three-dots-loading"
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
