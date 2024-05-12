import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/serviceAPI';

import { parseSlug } from 'services/serviceSlugify';

function Reviews() {
  const { movieId } = useParams();
  const id = parseSlug(movieId);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(id)
      .then(data => setReviews(data.results))
      .catch(err => console.log(err));
  }, [id, movieId]);

  return reviews.length ? (
    <ul>
      {reviews.map(el => {
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
