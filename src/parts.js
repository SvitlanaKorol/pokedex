import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 3rem 0.5rem;
  margin: auto 7rem;

  @media (min-width: 768px) {
    align-items: center;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 67%;
`;
export const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 30%;
  right: 10px;
  width: 33%;
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
