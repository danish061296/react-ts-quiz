import styled, { createGlobalStyle } from 'styled-components';
import BgImg from './images/beach.jpg';

export const GlobalStyle = createGlobalStyle`
html{ 
height: 100%
}

body{
    background-image: url(${BgImg});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;

}

*{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}


`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0;
    color: #e3e3e3;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h1 {
    font-family: Fascinate Impact, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    background-image: linear-gradient(90deg, #8b2d2d, #020001);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #475d79);
    font-size: 70px;
    font-weight: 800;
    text-align: center;
    margin: 20px;

    @media (max-width: 768px) {
      font-size: 50px;
    }
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #e58210);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
    font-size: 1rem;
    :hover {
      opacity: 0.8;
    }
  }

  .playAgain {
    font-size: 1.5rem;
    font-family: 'Helvetica Neue', 'sans-serif';
  }
`;
