import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/serviceAPI';
import { parseSlug } from 'services/serviceSlugify';
import fallbackPhoto from 'images/fallbackPhoto.jpg';

const IMG_URL = 'https://media.themoviedb.org/t/p/w220_and_h330_face';

function Cast() {
  const { movieId } = useParams();
  const id = parseSlug(movieId);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(id)
      .then(data => {
        setCast(data.cast);
      })
      .catch(err => console.log(err));
  }, [id, movieId]);

  return cast ? (
    <ul>
      {cast.map(el => {
        return (
          <li key={el.id}>
            <h3>Name: {el.name}</h3>
            <p>Popularity: {el.popularity}</p>
            <img
              style={{ width: 100 }}
              alt={el.name}
              src={
                el.profile_path
                  ? `${IMG_URL}${el.profile_path}`
                  : `${fallbackPhoto}`
              }
            ></img>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>currently there's no info</p>
  );
}

export default Cast;
