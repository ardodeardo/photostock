import React from 'react';
import tw, { styled, css } from 'twin.macro';

function Button(props) {
  return <ButtonSolid {...props}>{props.children}</ButtonSolid>;
}

const ButtonSolid = styled.button((size = 'm', color = 'red') => [
  css`
    padding: 8px 28px;
    border-radius: 48px;
  `,
  tw`font-worksans font-thin text-size_12x`,
  color === 'red' &&
    css`
      background-color: #e23e57;
    `,
]);

export default Button;
