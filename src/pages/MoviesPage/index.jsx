// import { useState } from 'react';
import Gallery from 'components/Gallery';
import s from './MoviesPage.module.css';
import { Pagination } from 'components/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchMovieByQuery } from 'services/serviceAPI';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query.trim().length) {
      setMovies([]);
      return;
    }

    fetchMovieByQuery({ query, page })
      .then(data => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(err => console.log(err));
  }, [page, query]);

  const onInputChange = e => {
    setQuery(e.target.value);
    setPage(1);
    const query = e.target.value;

    // history.push({
    //   ...location,
    //   search: `query=${query}&page=1`,
    // });
  };

  const handlePageChange = e => {
    const action = e.target.dataset.action;
    let newPage;
    action === 'decrement'
      ? (newPage = Number(page) - 1)
      : (newPage = Number(page) + 1);

    setPage(newPage);
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
          <Gallery
            movies={movies}
            // location={location}
            keyWord={'search'}
          ></Gallery>
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
