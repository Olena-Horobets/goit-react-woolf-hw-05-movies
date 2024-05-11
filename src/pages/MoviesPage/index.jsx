// import { useState } from 'react';
import s from './MoviesPage.module.css';

function MoviesPage() {
  // const [query, setQuery] = useState;
  // const [page, setPage] = useState();
  // const [movies, setMovies] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);

  // const onInputChange = e => {
  //   setQuery(e.target.value);
  //   setPage(1);
  //   const query = e.target.value;
  // };

  // const handlePageChange = e => {
  //   const action = e.target.dataset.action;
  //   let newPage;
  //   action === 'decrement'
  //     ? (newPage = Number(page) - 1)
  //     : (newPage = Number(page) + 1);

  //   setPage(newPage);
  // };

  // const onClearBtnClick = () => {
  //   setQuery('');
  // };

  return (
    <>
      {/* <form className={s.form}>
        <input
          className={s.input}
          value={query}
          onChange={onInputChange}
          autoComplete="off"
          autoFocus
        ></input>
        <div className={s.wrapper}></div>
      </form> */}

      <p className={s.searchRequest}>...enter your query</p>
    </>
  );
}

export default MoviesPage;
