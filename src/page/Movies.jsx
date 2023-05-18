import { useState, useEffect, useRef } from 'react';
import { getMovieSearchWord } from 'services/api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery';
import { SearchForm } from 'components/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchWord, setSearchWord] = useState(searchParams.get('name') ?? '');
  const [errorMasseg, setErrorMasseg] = useState(null);
  const location = useLocation();
  const controllerRef = useRef(new AbortController());
  const controller = controllerRef.current;
  const handleSubmit = value => {
    const searchWord = value.searchWord.trim();
    const nextParams = searchWord !== '' ? { name: searchWord } : {};
    setSearchParams(nextParams);
    setSearchWord(searchWord);
  };

  useEffect(() => {
    if (searchWord !== '') {
      fetchSearchWord(searchWord, controller.signal);
    } else {
      setMovies([]);
    }
    return () => {
      controller.abort();
    };
  }, [controller, searchWord]);

  const fetchSearchWord = async (searchWord, signal) => {
    try {
      const response = await getMovieSearchWord(searchWord, signal);
      setMovies(response?.results || []);
      setErrorMasseg(response?.message || null);
      if (response.results?.length < 1) {
        setErrorMasseg(`We didn't find anything behind this word`);
      }
    } catch (error) {
      setErrorMasseg(error?.message || 'Error');
    }
  };

  return (
    <>
      <SearchForm searchWord={searchWord} handleSubmit={handleSubmit} />
      {movies.length > 0 ? (
        <MoviesGallery moviesArr={movies} location={location} linkTo={''} />
      ) : (
        <p className="sub-title">Enter a keyword and hit search</p>
      )}
      {errorMasseg && <h1 className="title">{errorMasseg}</h1>}
    </>
  );
};

export default Movies;
