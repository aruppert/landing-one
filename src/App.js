import React from 'react';
import styled from '@emotion/styled';
import './App.css';
import GlobalStyles from './GlobalStyles';
import lady from './graphics/lady.gif';
import Logo from './graphics/Logo';

function App() {
  return (
    <>
      <GlobalStyles />
      <Top href="https://quizzme.alexanderruppert.com" target="_blank" rel="noopener noreferrer">
        <QuizzMeWrapper>
          <Logo />
          <QuizzMeLabel>quizz.Me</QuizzMeLabel>
        </QuizzMeWrapper>
      </Top>
      <Bottom href="https://mse.alexanderruppert.com" target="_blank" rel="noopener noreferrer">
        <MSEWrapper>
          <Lady src={lady} />
          <MSELabel>Miriam Exner Design Portfolio</MSELabel>
        </MSEWrapper>
      </Bottom>
    </>
  );
}

export default App;

const Top = styled.a`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background: linear-gradient(to right, var(--quiz-5-2), var(--quiz-5-1));
`;

const QuizzMeWrapper = styled.div`
  width: min-content;
  grid-column: 3;
  margin: auto;
`;

const QuizzMeLabel = styled.label`
  font-family: 'Leckerli One', cursive;
  font-size: 2em;
  font-weight: bold;
  color: var(--pri);
  text-decoration: none;
`;

const Bottom = styled.a`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background: var(--mse-bg);
`;

const MSEWrapper = styled.div`
  grid-column: 3;
  margin: auto;
  display: flex;
  flex-flow: column;
`;

const Lady = styled.img`
  height: 10em;
  margin: auto;
`;

const MSELabel = styled.label`
  font-family: 'Abril Fatface', cursive;
  color: var(--pri);
  text-align: center;
  font-size: 1.6em;
  width: 100%;
  display: block;
`;
