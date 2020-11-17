import React from 'react';
import styled from '@emotion/styled';
import github from '../graphics/github2.svg';
import mail from '../graphics/mail.svg';

export default function MiddleButtons() {
  return (
    <>
      <Container>
        <ButtonBackground
          href="https://github.com/aruppert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHublogo src={github} />
        </ButtonBackground>
        <ButtonBackground href="mailto:aruppert@pm.me" type="email">
          <MailIcon src={mail} />
        </ButtonBackground>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.5em;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 300;
`;

const ButtonBackground = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  -webkit-box-shadow: 0px 0px 2px 3px #fff;
  box-shadow: 0px 0px 2px 3px #fff;
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  margin: 0 10vw;
  outline: none;
`;

const GitHublogo = styled.img`
  width: 3.5em;
  transform: translateX(-1%);
`;

const MailIcon = styled(GitHublogo)`
  transform: none;
`;
