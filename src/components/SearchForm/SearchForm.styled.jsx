import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormSearch = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #444950;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: var(--color-acceent);
  background-color: #444950;
  &:hover {
    background-color: var(--color-acceent);
    color: #444950;
  }
`;
export const SearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: var(--color-acceent);
  background-color: #444950;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
