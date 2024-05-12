import s from './Reviews.module.css';

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/serviceAPI';

import { parseSlug } from 'services/serviceSlugify';

function Reviews() {
  const location = useLocation();

  const { movieId } = useParams();
  // const movieId = parseSlug(slug);
  const id = parseSlug(movieId);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(id)
      .then(data => setReviews(data.results))
      .catch(err => console.log(err));
  }, [movieId]);

  return reviews ? (
    <ul>
      {reviews.map(el => {
        console.log(el);
        return (
          <li key={el.id}>
            <h3>{el.author}</h3>
            <p>{el.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>no reviews</p>
  );
}

export default Reviews;
