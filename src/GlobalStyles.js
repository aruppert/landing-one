import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        body {
          font-size: 16px;
          font-family: 'Gilroy', 'Abril Fatface', cursive;

          #root {
            display: grid;
            grid-template-rows: 1fr 1fr;
            height: 100%;
            width: 100%;
            margin: 0;
            position: fixed;
            top: 0;
            left: 0;
            --pri: #ffffff;
            --quiz-5-1: #fdc830;
            --quiz-5-2: #f37335;
            --mse-bg: #231d24;
            --mse-sec: #55f297;
            --mse-danger: #f26055;
            > a {
              text-decoration: none;
            }
          }
        }
      `}
    />
  );
}

export default GlobalStyles;
