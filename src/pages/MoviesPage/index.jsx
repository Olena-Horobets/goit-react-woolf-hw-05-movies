// import { useState } from 'react';
import Gallery from 'components/Gallery';
import s from './MoviesPage.module.css';
import { Pagination } from 'components/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchMovieByQuery } from 'services/serviceAPI';
import { useLocation, useSearchParams } from 'react-router-dom';

function MoviesPage() {
  // const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;

  const location = useLocation();

  useEffect(() => {
    if (!query?.trim().length) {
      setMovies([]);
      return;
    }

    query &&
      fetchMovieByQuery({ query: query, page })
        .then(data => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        })
        .catch(err => console.log(err));
  }, [page, query]);

  const onInputChange = e => {
    const query = e.target.value;
    setSearchParams(searchParams => {
      searchParams.set('query', query);
      searchParams.set('page', 1);
      return searchParams;
    });
  };

  const handlePageChange = e => {
    const action = e.target.dataset.action;
    let newPage;
    action === 'decrement'
      ? (newPage = Number(page) - 1)
      : (newPage = Number(page) + 1);

    setSearchParams(searchParams => {
      searchParams.set('page', newPage);
      return searchParams;
    });
  };

  return (
    <>
      <form className={s.form}>
        <input
          className={s.input}
          value={query}
          onChange={onInputChange}
          autoComplete="off"
          autoFocus
        ></input>
        <div className={s.wrapper}></div>
      </form>

      {movies.length ? (
        <>
          <Gallery movies={movies} location={location}></Gallery>
          <Pagination
            page={page}
            totalPages={totalPages}
            onClick={handlePageChange}
            movies={movies}
          />
        </>
      ) : (
        <p className={s.searchRequest}>...enter your query</p>
      )}
    </>
  );
}

export default MoviesPage;
