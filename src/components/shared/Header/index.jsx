import React, { useState, useEffect, useRef } from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

import { RiArrowDownSFill } from 'react-icons/ri';

import Dropdown from './components/Dropdown';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <header tw="py-6 fixed top-0 left-0 right-0 z-10" css={css({ backgroundColor: '#160d1c' })}>
      <Container>
        <div tw="flex justify-between">
          <div tw="text-white font-montserrat text-size_16x font-thin">
            <Link to="/">
              Photo<span css={[tw`font-bold`, css({ color: '#e23e57' })]}>Stock</span>
            </Link>
          </div>
          <div tw="relative flex items-center">
            <button
              tw="cursor-pointer"
              css={css({ color: '#cccccc' })}
              onClick={() => handleDropdown()}
            >
              Hi, <b tw="text-white">User</b>{' '}
              <span tw="inline-block align-middle ml-4">
                <RiArrowDownSFill
                  tw="text-white"
                  css={[css({ transform: dropdown ? 'rotate(-180deg)' : '' })]}
                />
              </span>
            </button>

            {dropdown && (
              <Dropdown toggler={handleDropdown} togglerProfile={props.togglerProfile}></Dropdown>
            )}
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
