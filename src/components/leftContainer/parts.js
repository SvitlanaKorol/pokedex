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
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  width: 300px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 150px;
  }

  img {
    width: 120px;
    height: 120px;
  }

  small {
    text-transform: capitalize;
  }
`;
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    color: rgb(22, 22, 22);
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.185);
    width: 70px;
    align-items: end;
  }
  .grass {
    background-color: rgb(124, 252, 0);
  }

  .rock {
    background-color: rgb(90, 77, 65);
  }
  .ghost {
    background-color: rgb(156, 155, 152);
  }
  .electric {
    background-color: #7df9ff;
  }
  .bug {
    background-color: #f6d6a7;
  }
  .poison {
    background-color: #e0a7f6;
  }
  .normal {
    background-color: #f4f4f4;
  }
  .fairy {
    background-color: rgba(255, 230, 215);
  }
  .fire {
    background-color: #aa4203;
  }
  .water {
    background-color: #00ffff;
  }
`;
