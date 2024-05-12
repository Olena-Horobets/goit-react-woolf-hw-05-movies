import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Navigation = lazy(() => import('components/Navigation'));
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const ErrorMessage = lazy(() => import('components/ErrorMessage'));

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
