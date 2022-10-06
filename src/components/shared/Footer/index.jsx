import React from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

function Footer() {
  return (
    <footer tw="py-8" css={[css({ backgroundColor: '#e23e57' })]}>
      <Container>
        <div tw="flex justify-between">
          <p tw="block font-worksans text-size_8x" css={css({ color: '#cccccc' })}>
            Copyright <span css={[css({ color: '#311d3f' })]}>@happybaaga</span> 2022 - Supported by{' '}
            <b tw="text-white">Pixabay</b>
          </p>
          <p tw="block">yaa</p>
        </div>
      </Container>
    </footer>
  );
}

const Container = styled.div(() => [
  tw`w-full mx-auto`,
  css`
    max-width: 1640px;
  `,
]);

export default Footer;
