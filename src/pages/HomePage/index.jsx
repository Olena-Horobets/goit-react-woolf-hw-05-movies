import s from './HomePage.module.css';

function HomePage() {
  return (
    <>
      <h2 className="title">Trending movies</h2>
      <div className={s.homeControls}>
        <label htmlFor="day">DAY</label>
        <input id="day" className={s.input} type="radio" value="day"></input>
        <label htmlFor="week">WEEK</label>
        <input id="week" className={s.input} type="radio" value="week"></input>
      </div>
    </>
  );
}

export default HomePage;
