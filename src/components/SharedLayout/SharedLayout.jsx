import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  PrevLogo,
  NextLogo,
  Nav,
  LinkPage,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Container className="container-header">
        <Header>
          <Logo>
            <PrevLogo>GO</PrevLogo>
            <NextLogo>Movies</NextLogo>
          </Logo>
          <Nav>
            <LinkPage to="/">Home</LinkPage>
            <LinkPage to="/movies">Movies</LinkPage>
          </Nav>
        </Header>
      </Container>
      <Container>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
