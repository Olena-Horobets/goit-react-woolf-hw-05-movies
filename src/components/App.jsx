import HomePage from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

import MoviesPage from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import './App.css';

export const App = () => {
  return (
    <div className="container">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};
