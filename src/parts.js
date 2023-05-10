import styled from 'styled-components';
import { ContentCard } from './components/leftContainer/parts';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin: auto;

  @media (min-width: 768px) {
    align-items: center;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  width: 67%;
  align-items: center;
  justify-content: center;

  ${ContentCard} {
    width: calc((100% - 2rem) / 4);
  }
`;

export const Title = styled.div`
  padding: 1rem 4rem;
  border: 1px solid rgba(0, 0, 0, 0.185);
  font-size: 24px;
  font-weight: bold;
`;
export const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 25%;
  right: 10px;
  width: 50%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LoadMoreWrapper = styled.div`
  background-color: #7fc7ff;
  border-radius: 2px;
  border: 1px solid #c6c6c6;
  color: #444;
  padding: 0.5rem 1.5rem;
  min-width: 60%;
  margin-top: 1rem;
`;
