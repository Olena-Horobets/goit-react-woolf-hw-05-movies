import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import HomePage from 'pages/HomePage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import MoviesPage from 'pages/MoviesPage';
import Navigation from './Navigation';
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));

export const App = () => {
  return (
    <div className="container">
      <Navigation></Navigation>

      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
