import s from './Gallery.module.css';

import { Link } from 'react-router-dom';

import { getSlug } from 'services/serviceSlugify';
import MovieCard from 'components/MovieCard';

function Gallery({ movies, location }) {
  return (
    <>
      <ul className={s.gallery}>
        {movies.map(el => (
          <li className={s.galleryItem} id={el.id} key={el.id}>
            <Link
              className={s.galleryLink}
              to={`/movies/${getSlug(el)}`}
              state={location}
            >
              <MovieCard movie={el} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Gallery;
