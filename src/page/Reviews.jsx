import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieReviews } from 'services/api';
import { Title, Item, SubTitle, Text } from './Reviews.styled';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const controllerRef = useRef(new AbortController());
  const controller = controllerRef.current;

  useEffect(() => {
    setIsLoad(true);
    fetchReviews(movieId, controller.signal);
    return () => {
      controller.abort();
    };
  }, [controller, movieId]);

  const fetchReviews = async (id, signal) => {
    try {
      const response = await getMovieReviews(id);
      setReviews(response?.results || null);
      setError(response?.message || null);
      setIsLoad(false);
    } catch (error) {
      setError(error);
      setIsLoad(false);
    }
  };

  return (
    <>
      {reviews &&
        (reviews.length < 1 ? (
          <Text style={{ marginTop: '10px' }}>
            We don`t have any reviews for this movie
          </Text>
        ) : (
          <ul>
            {reviews.map(review => (
              <Item key={review.id}>
                <SubTitle>Author:</SubTitle>
                <Text>{review.author}</Text>
                <SubTitle className="sub">Content:</SubTitle>
                <Text>{review.content}</Text>
              </Item>
            ))}
          </ul>
        ))}
      {isLoad && <Loader />}
      {error && (
        <>
          <Title>Oops, something went wrong, please try again later.</Title>
          <p>Error: {error}</p>
        </>
      )}
    </>
  );
};

export default Reviews;
