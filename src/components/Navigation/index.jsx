import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s['active'] : s['link'])}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s['active'] : s['link'])}
          >
            movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
