import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('page/Home'));
const Movies = lazy(() => import('page/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails'));
const Cast = lazy(() => import('page/Cast'));
const Reviews = lazy(() => import('page/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
