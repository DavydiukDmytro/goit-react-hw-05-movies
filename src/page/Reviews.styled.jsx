import styled from '@emotion/styled';

export const Title = styled.h2`
  padding: 10px 0;
  font-size: 30px;
  font-weight: 500;
`;

export const Item = styled.li`
  padding: 15px;
  margin-top: 10px;
  background-color: #444950;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const SubTitle = styled.p`
  color: var(--color-acceent);
  font-size: 22px;
  margin-bottom: 5px;
  &.sub {
    margin-top: 10px;
  }
`;
export const Text = styled.p`
  font-size: 20px;
`;
