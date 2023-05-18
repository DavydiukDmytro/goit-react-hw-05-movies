import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  background-color: #444950;
  font-size: 25px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    color: var(--color-acceent);
    background-color: #111;
  }
`;
export const SubTitle = styled.h2`
  margin-top: 30px;
  font-size: 30px;
  color: var(--color-acceent);
  margin-bottom: 15px;
`;

export const LinkTo = styled(NavLink)`
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  font-size: 24px;
  font-weight: bold;

  height: 100%;

  &:focus,
  &:hover {
    color: var(--color-acceent);
  }

  &.active {
    color: var(--color-acceent);
  }
`;
