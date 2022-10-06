import React from 'react';
import tw, { styled, css } from 'twin.macro';

function Button(props) {
  return <ButtonSolid {...props}>{props.children}</ButtonSolid>;
}

const ButtonSolid = styled.button(({ size = 'md', color = 'red' }) => [
  css`
    border-radius: 48px;
    ${tw`font-worksans font-thin text-white`}
  `,
  size === 'md' &&
    css`
      padding: 8px 28px;
      ${tw`text-size_12x`}
    `,
  size === 'sm' &&
    css`
      padding: 10px 48px;
      ${tw`text-size_8x`}
    `,
  color === 'red' &&
    css`
      background-color: #e23e57;
    `,
  color === 'purple' &&
    css`
      background-color: #522546;
    `,
  color === 'white' &&
    css`
      color: #88304e;
      ${tw`bg-white`}
    `,
]);

export default Button;
