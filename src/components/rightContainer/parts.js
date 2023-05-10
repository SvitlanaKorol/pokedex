import styled from 'styled-components';

export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0.185);
  border-radius: 0.2rem;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  width: 200px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 150px;
  }

  .h4 {
    margin-bottom: 0.2rem;
  }

  .number {
    border-radius: 1rem;
    padding: 0.2rem 0.4rem;
    background-color: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 100px;
    height: 100px;
  }

  small {
    text-transform: capitalize;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  flex-grow: 1;
  . * {
    flex: 1 1 30%;
    margin: 1rem;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 8px;
  text-align: left;
`;

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
