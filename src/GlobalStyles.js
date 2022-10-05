import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}

    margin: 0;
    padding: 0;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
