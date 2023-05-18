import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;

  &.container-header {
    background-color: #444950;
  }
`;

export const Header = styled.header`
  display: flex;
  padding: 20px 0;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
`;
export const PrevLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 80px;
  height: 60px;
  background-color: var(--color-black);
  position: relative;
  font-size: 34px;
  font-weight: bold;
  margin-right: 30px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 30px solid var(--color-black);
  }
`;
export const NextLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 140px;
  height: 60px;
  background-color: var(--color-acceent);
  font-size: 34px;
  font-weight: bold;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
`;
export const LinkPage = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 34px;
  font-weight: bold;

  padding: 0 20px;
  height: 100%;

  &:focus,
  &:hover {
    color: var(--color-acceent);
  }

  &.active {
    color: var(--color-acceent);
  }
`;
