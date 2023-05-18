import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GalleryItem = styled.li`
  background-color: #444950;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const MoveiLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
`;
export const MoveiImg = styled.img`
  background-color: #1c1e21;
  width: 100%;
  height: 195px;
`;

export const MoveiTitle = styled.h2`
  padding: 10px 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
`;
