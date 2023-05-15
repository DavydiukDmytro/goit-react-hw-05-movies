import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <p>SharedLayout</p>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
