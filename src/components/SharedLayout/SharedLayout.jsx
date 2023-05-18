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
import { ThreeDots } from 'react-loader-spinner';

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
          <Suspense
            fallback={
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#9fa9b5"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ justifyContent: 'center' }}
                wrapperClassName=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
