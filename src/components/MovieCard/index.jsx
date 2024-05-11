import s from './MovieCard.module.css';
import fallbackPhoto from 'images/fallbackPhoto.jpg';

const IMG_URL = 'https://image.tmdb.org/t/p/w342';

function MovieCard({ movie }) {
  return (
    <div className={s.movieCard}>
      <h3 className={s.movieTitle}>{movie.title || movie.name}</h3>
      <img
        className={s.movieImg}
        src={
          movie.poster_path
            ? `${IMG_URL}${movie.poster_path}`
            : `${fallbackPhoto}`
        }
        alt={movie.title || movie.name}
      ></img>
    </div>
  );
}

export default MovieCard;
