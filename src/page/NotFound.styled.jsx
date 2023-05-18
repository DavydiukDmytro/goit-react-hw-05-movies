import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
`;
export const PrevLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100px;
  height: 90px;
  background-color: var(--color-black);
  position: relative;
  font-size: 48px;
  font-weight: bold;
  margin-right: 60px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 0;
    border-top: 45px solid transparent;
    border-bottom: 45px solid transparent;
    border-left: 60px solid var(--color-black);
  }
`;
export const NextLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 200px;
  height: 90px;
  background-color: var(--color-acceent);
  font-size: 48px;
  font-weight: bold;
`;
export const Text = styled.h1`
  max-width: 50%;
  margin-top: 20px;
  text-align: center;

  font-size: 34px;
`;
export const Span = styled.span`
  color: var(--color-acceent);
`;
