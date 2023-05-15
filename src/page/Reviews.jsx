import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId]);

  const fetchReviews = async id => {
    try {
      const response = await getMovieReviews(id);
      if (response) {
        setReviews(response.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return reviews.length < 1 ? (
    <p>0</p>
  ) : (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>author</p>
          <p>{review.author}</p>
          <p>content</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
