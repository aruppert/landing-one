import React from 'react';
import styled from '@emotion/styled';
import lady from '../graphics/lady.gif';

export default function MiriamExnerDesign() {
  return (
    <>
      <Container href="https://mse.alexanderruppert.com" target="_blank" rel="noopener noreferrer">
        <MSEWrapper>
          <Lady src={lady} />
          <MSELabel>Miriam Exner Design Portfolio</MSELabel>
        </MSEWrapper>
      </Container>
    </>
  );
}

const Container = styled.a`
  display: flex;
  background: var(--mse-bg);
  :hover {
    opacity: 0.9;
  }
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
  display: block;
  width: 7em;
  font-family: 'Abril Fatface', cursive;
  color: var(--pri);
  text-align: center;
  font-size: 1.6em;
`;
