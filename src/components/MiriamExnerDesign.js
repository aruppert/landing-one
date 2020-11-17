import React from 'react';
import styled from '@emotion/styled';
import lady from '../graphics/lady.gif';
import { motion } from 'framer-motion';

export default function MiriamExnerDesign() {
  return (
    <>
      <Container
        href="https://mse.alexanderruppert.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: '-45vh', zIndex: 200 }}
        whileTap={{ y: '-45vh', zIndex: 200 }}
        transition={{
          delay: 1,
          default: { duration: 3.5 },
        }}
      >
        <MSEWrapperPositioner>
          <MSEWrapper animate={{ scale: 2 }} transition={{ duration: 3.5 }}>
            <Lady src={lady} />
            <MSELabel>Miriam Exner Design Portfolio</MSELabel>
          </MSEWrapper>
        </MSEWrapperPositioner>
      </Container>
    </>
  );
}

const Container = styled(motion.a)`
  display: flex;
  background: var(--mse-bg);
  overflow: hidden;
  height: 100vh;
  margin-bottom: -50vh;
`;

const MSEWrapperPositioner = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  align-items: flex-start;
`;

const MSEWrapper = styled(motion.div)`
  display: flex;
  flex-flow: column;
  padding: 7em 0;
`;

const Lady = styled.img`
  height: 5em;
  margin: 0 auto;
`;

const MSELabel = styled.label`
  display: block;
  width: 7em;
  font-family: 'Abril Fatface', cursive;
  color: var(--pri);
  text-align: center;
  font-size: 0.8em;
`;
