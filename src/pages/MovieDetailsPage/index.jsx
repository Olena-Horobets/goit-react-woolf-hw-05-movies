import s from './MovieDetailsPage.module.css';
import fallbackPhoto from 'images/fallbackPhoto.jpg';

import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchMovieById } from 'services/serviceAPI';
import { useEffect } from 'react';
import ErrorMessage from 'components/ErrorMessage';
import { parseSlug } from 'services/serviceSlugify';

const getGradient = data => {
  return `#ff4c29 0deg ${data * 36}deg, #ffffff77 ${data * 36}deg 360deg`;
};

function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [status, setStatus] = useState('');
  const [movie, setMovie] = useState({});

  const id = parseSlug(movieId);

  useEffect(() => {
    setStatus('pending');
    fetchMovieById({ id })
      .then(data => setMovie(data), setStatus('resolved'))
      .catch(err => setStatus('rejected'));
  }, [id]);

  if (status === 'resolved') {
    return (
      <div className={s.movieCard}>
        <Link to={location.state ?? '/movies'}>Go back</Link>
        <h2 className={s.title}>
          {movie.title}
          <span className={s.titleDate}>
            {movie.release_date && String(movie.release_date).slice(0, 4)}
          </span>
        </h2>
        {movie.tagline && <p className={s.tagline}>{movie.tagline}</p>}
        <div className={s.wrapper}>
          <img
            className={s.movieImage}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : `${fallbackPhoto}`
            }
            alt={movie.title}
          ></img>
          <div className={s.overview}>
            <p>{movie.overview}</p>
            {movie.genres && (
              <ul className={s.genres}>
                {movie.genres.map(el => (
                  <li key={el.name} className={s.genresItem}>
                    {el.name}
                  </li>
                ))}
              </ul>
            )}

            <div className={s.ratingWrapper}>
              {movie.vote_average > 0 && (
                <div className={s.contentInlineBlock}>
                  <h3 className={s.subtitle}>Movie rating:</h3>
                  <div
                    className={s.rating}
                    style={{
                      background: `conic-gradient(${getGradient(
                        movie.vote_average
                      )})`,
                    }}
                  >
                    <p className={s.ratingNumber}>{`${
                      movie.vote_average * 10
                    } %`}</p>
                  </div>
                </div>
              )}

              {movie.production_companies?.length ? (
                <>
                  <h3 className={s.subtitle}>Production by:</h3>
                  <ul className={s.logoList}>
                    {movie.production_companies.map(el => (
                      <li key={el.id} className={s.logoItem}>
                        {el.logo_path ? (
                          <img
                            className={s.logo}
                            src={`https://image.tmdb.org/t/p/original${el.logo_path}`}
                            alt={el.name}
                          />
                        ) : (
                          <span className={s.logoText}>{el.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'rejected') {
    return <ErrorMessage />;
  }

  if (status === 'pending') {
    return <p>...loading</p>;
  }
}

export default MovieDetailsPage;
