import React from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

const Header = (props) => {
  return (
    <header tw="py-6 fixed top-0 left-0 right-0" css={css({ backgroundColor: '#160d1c' })}>
      <Container>
        <div tw="flex justify-between">
          <div tw="text-white font-montserrat text-size_16x font-thin">
            Photo<span css={[tw`font-bold`, css({ color: '#e23e57' })]}>Stock</span>
          </div>
          <div>
            <div css={css({ color: '#cccccc' })}>
              Hi, <b tw="text-white">User</b>{' '}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

const Container = styled.div(() => [
  tw`w-full mx-auto`,
  css`
    max-width: 1640px;
  `,
]);

export default Header;
