import React from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

import { Link } from 'react-router-dom';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer tw="py-8 bg-brand-red">
      <Container>
        <div tw="flex justify-between items-center">
          <div>
            <p tw="font-worksans text-size_8x text-white">
              Copyright <span tw="text-brand-purple-medium">@happybaaga</span> 2022 - Supported
              by <b tw="text-white">Pixabay</b>
            </p>
          </div>
          <div tw="flex items-center">
            <Link to="/">
              <button tw="text-white text-size_14x mr-4">
                <AiFillLinkedin />
              </button>
            </Link>
            <Link to="/">
              <button tw="text-white text-size_14x">
                <AiFillGithub />
              </button>
            </Link>
          </div>
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
