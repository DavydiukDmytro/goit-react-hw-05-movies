import { getTranding } from 'services/api';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery';

const Home = () => {
  const [trandingList, setTrandingList] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const controllerRef = useRef(new AbortController());
  const controller = controllerRef.current;

  useEffect(() => {
    fetchTranding(controller.signal);
    return () => {
      controller.abort();
    };
  }, [controller]);

  const fetchTranding = async signal => {
    try {
      const response = await getTranding(signal);
      setTrandingList(response?.results || []);
      setError(response?.message || null);
    } catch (error) {
      setError(error?.message || 'Error');
    }
  };

  return (
    <>
      {trandingList.length > 0 && (
        <>
          <h1 className="title">Tranding today</h1>
          <MoviesGallery
            moviesArr={trandingList}
            location={location}
            linkTo={'movies/'}
          />
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
    </>
  );
};

export default Home;
