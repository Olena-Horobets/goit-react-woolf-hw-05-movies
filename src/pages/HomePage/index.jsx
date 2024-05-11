import Gallery from 'components/Gallery';
import s from './HomePage.module.css';

import { useState, useEffect } from 'react';

import { fetchTrending } from 'services/serviceAPI';

function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTrending({ page })
      .then(data => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(err => console.log(err));
  }, [page]);

  return (
    <>
      <h2 className="title">Trending movies</h2>
      {movies && movies.length && (
        <>
          <Gallery movies={movies} keyWord={'trending'}></Gallery>
          {/* <Pagination
            page={page}
            totalPages={totalPages}
            onClick={handlePageChange}
            movies={movies}
          /> */}
        </>
      )}
    </>
  );
}

export default HomePage;
