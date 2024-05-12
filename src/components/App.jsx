import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navigation from './Navigation';
import ErrorMessage from './ErrorMessage';
import Cast from './Cast';
import Reviews from './Reviews';
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
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/404" element={<ErrorMessage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
