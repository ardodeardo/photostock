import React from 'react';
import tw, { styled, css } from 'twin.macro';

function Button(props) {
  return <ButtonSolid {...props}>{props.children}</ButtonSolid>;
}

const ButtonSolid = styled.button(({ size = 'md', color = 'red', active }) => [
  tw`font-worksans font-thin text-white`,
  css`
    border-radius: 48px;
  `,
  size === 'xs' && tw`text-size_7x`,
  css`
    padding: 8px 22px;
  `,
  size === 'sm' && tw`text-size_8x`,
  css`
    padding: 8px 22px;
  `,
  size === 'md' && tw`text-size_8x`,
  css`
    padding: 10px 48px;
  `,
  size === 'lg' && tw`text-size_12x`,
  css`
    padding: 8px 28px;
  `,
  color === 'red' && tw`bg-brand-red text-white`,
  color === 'purple' &&
    css`
      background-color: #522546;
    `,
  color === 'white' && tw`text-brand-purple-light bg-white`,
  color === 'gray' && tw`bg-brand-gray-medium text-brand-purple-medium`,
  active && tw`bg-brand-red text-white`,
]);

export default Button;
