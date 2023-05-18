import { useState, useEffect, useRef } from 'react';
import { getMovieSearchWord } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery';
import { SearchForm } from 'components/SearchForm';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorMasseg, setErrorMasseg] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const controllerRef = useRef(new AbortController());
  const controller = controllerRef.current;

  const handleSubmit = value => {
    setMovies([]);
    setIsLoad(true);
    const searchWord = value.searchWord.trim();
    const nextParams = searchWord !== '' ? { name: searchWord } : {};
    setSearchParams(nextParams);
  };

  const searchWord = searchParams.get('name') ?? '';

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
      setIsLoad(false);
    } catch (error) {
      setErrorMasseg(error?.message || 'Error');
      setIsLoad(false);
    }
  };

  return (
    <>
      <SearchForm searchWord={searchWord} handleSubmit={handleSubmit} />
      {movies.length !== 0 ? (
        <MoviesGallery moviesArr={movies} />
      ) : (
        !isLoad && <p className="sub-title">Enter a keyword and hit search</p>
      )}
      {isLoad && <Loader />}
      {errorMasseg && <h1 className="title">{errorMasseg}</h1>}
    </>
  );
};

export default Movies;
