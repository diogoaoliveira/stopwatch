import styled, { createGlobalStyle } from 'styled-components';
import posed from 'react-pose';

const AnimatedButton = posed.button({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 },
});

export const GlobalStyle = createGlobalStyle`
  body {
      box-sizing: border-box;
    background-color: #2980b9;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 16px);
`;

export const Time = styled.h1`
  font-size: 8rem;
  color: white;
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const Button = styled(AnimatedButton)`
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 6rem;
  height: 12rem;
  width: 12rem;
  outline: none;
  font-size: 2.5rem;
`;
