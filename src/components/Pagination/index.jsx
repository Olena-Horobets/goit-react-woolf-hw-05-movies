import s from './Pagination.module.css';

import Button from 'components/Button';

function Pagination({ page, totalPages, onClick }) {
  return (
    <div className={s.pagination}>
      <Button
        type="button"
        styledClass="btn"
        dataAction="decrement"
        disabled={page === 1}
        onClick={onClick}
        text="prev page"
      />
      {page ? <span className={s.text}>{page}</span> : <p>...loading</p>}

      <Button
        type="button"
        styledClass="btn"
        dataAction="increment"
        disabled={page >= totalPages}
        onClick={onClick}
        text="next page"
      />
    </div>
  );
}

export { Pagination };
