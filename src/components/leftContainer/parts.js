import styled from 'styled-components';

export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0;
  margin: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0.185);
  border-radius: 0.2rem;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  height: 100px;
  width: 60px;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 60px;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    color: rgb(22, 22, 22);
    margin-top: auto;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: bold;
  }
  .grass {
    width: 50px;
    background-color: rgb(124, 252, 0);
    font-size: 12px;
    font-weight: normal;
  }

  .rock {
    width: 50px;
    background-color: rgb(90, 77, 65);
    font-size: 12px;
    font-weight: normal;
  }
  .ghost {
    width: 50px;
    background-color: rgb(156, 155, 152);
    font-size: 12px;
    font-weight: normal;
  }
  .electric {
    width: 50px;
    background-color: #7df9ff;
    font-size: 12px;
    font-weight: normal;
  }
  .bug {
    width: 50px;
    background-color: #f6d6a7;
    font-size: 12px;
    font-weight: normal;
  }
  .poison {
    width: 50px;
    background-color: #e0a7f6;
    font-size: 12px;
    font-weight: normal;
  }
  .normal {
    width: 50px;
    background-color: #f4f4f4;
    font-size: 12px;
    font-weight: normal;
  }
  .fairy {
    width: 50px;
    background-color: rgba(255, 230, 215);
    font-size: 12px;
    font-weight: normal;
  }
  .fire {
    width: 50px;
    background-color: #aa4203;
    font-size: 12px;
    font-weight: normal;
  }
  .water {
    width: 50px;
    background-color: #00ffff;
    font-size: 12px;
    font-weight: normal;
  }
`;
