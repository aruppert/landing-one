import React from 'react';
import styled from '@emotion/styled';
import github from '../graphics/github2.svg';

export default function MiddleButtons() {
  return (
    <>
      <Container>
        <GitHubLogoBackground
          href="https://github.com/aruppert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHublogo src={github} />
        </GitHubLogoBackground>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 3.5em;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const GitHubLogoBackground = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, var(--quiz-5-1), var(--quiz-5-2) 50%, var(--mse-bg) 50%);
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  margin: auto;
  :hover {
    transform: scale(2);
  }
  outline: none;
`;

const GitHublogo = styled.img`
  width: 3.5em;
`;
