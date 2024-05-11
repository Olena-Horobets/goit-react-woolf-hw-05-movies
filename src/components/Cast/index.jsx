// import s from './Cast.module.css';

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router';
// import { Link, useParams } from 'react-router-dom';

// import { fetchMovieCast } from 'services/serviceAPI';
// import { getSlug, parseSlug } from 'services/serviceSlugify';
// import Button from 'components/Button';

function Cast() {
  // const location = useLocation();

  // const { slug } = useParams();
  // const movieId = parseSlug(slug);

  // const [cast, setCast] = useState([]);

  return (
    <>
      {/* {cast && cast.length ? (
        <>
          <ul>
            {cast.map(el => (
              <li key={el.id} className={s.castItem}></li>
            ))}
          </ul>
        </>
      ) : (
        <p>currently there is no info</p>
      )} */}
      <p>cast</p>
    </>
  );
}

export default Cast;
