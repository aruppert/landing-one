import React from 'react';
import styled from '@emotion/styled';
import Logo from '../graphics/Logo';

export default function Quizzme() {
  return (
    <>
      <Container
        href="https://quizzme.alexanderruppert.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <QuizzMeWrapper>
          <Logo />
          <QuizzMeLabel>quizz.Me</QuizzMeLabel>
        </QuizzMeWrapper>
      </Container>
    </>
  );
}

const Container = styled.a`
  display: flex;
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
