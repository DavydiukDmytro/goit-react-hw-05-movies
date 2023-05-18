import { getTranding } from 'services/api';
import { useEffect, useState, useRef } from 'react';
import { MoviesGallery } from 'components/MoviesGallery';
import { Loader } from 'components/Loader';

const Home = () => {
  const [trandingList, setTrandingList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const controllerRef = useRef(new AbortController());
  const controller = controllerRef.current;

  useEffect(() => {
    setIsLoad(true);
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
      setIsLoad(false);
    } catch (error) {
      setError(error?.message || 'Error');
      setIsLoad(false);
    }
  };

  return (
    <>
      {trandingList.length !== 0 && (
        <>
          <h1 className="title">Tranding today</h1>
          <MoviesGallery moviesArr={trandingList} />
        </>
      )}
      {isLoad && <Loader />}
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
