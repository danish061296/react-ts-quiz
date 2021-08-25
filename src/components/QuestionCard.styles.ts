import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 1100px;

  /* background: #ebfeff; */
  background: #141518;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  @media (max-width: 768px) {
    min-width: 400px;
  }

  p {
    font-size: 1rem;
    color: #e4e4e4;
  }
  .number {
    font-size: 1rem;
    color: #a0a0a0;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #49AA4D, #49AA4D)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #B74C4B, #B74C4B)'
        : 'linear-gradient(90deg, #468EC2, #468EC2)'};

    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
