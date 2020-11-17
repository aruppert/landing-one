import React from 'react';
import styled from '@emotion/styled';
import Logo from '../graphics/Logo';
import { motion } from 'framer-motion';

export default function Quizzme() {
  return (
    <>
      <Container
        href="https://quizzme.alexanderruppert.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: '45vh', zIndex: 200 }}
        whileTap={{ y: '45vh', zIndex: 200 }}
        transition={{
          delay: 1,
          default: { duration: 3.5 },
        }}
      >
        <QuizzMePositioner>
          <QuizzMeWrapper animate={{ scale: 2 }} transition={{ duration: 3.5 }}>
            <Logo />
            <QuizzMeLabel>quizz.Me</QuizzMeLabel>
          </QuizzMeWrapper>
        </QuizzMePositioner>
      </Container>
    </>
  );
}

const Container = styled(motion.a)`
  display: flex;
  overflow: hidden;
  height: 100vh;
  margin-top: -50vh;
  background: linear-gradient(to right, var(--quiz-5-2), var(--quiz-5-1));
`;

const QuizzMePositioner = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  align-items: flex-end;
`;

const QuizzMeWrapper = styled(motion.div)`
  width: min-content;
  padding: 7em 0;
`;

const QuizzMeLabel = styled.label`
  font-family: 'Leckerli One', cursive;
  font-size: 1em;
  font-weight: bold;
  color: var(--pri);
  text-decoration: none;
`;
