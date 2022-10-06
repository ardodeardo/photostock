import React, { useState, useEffect, useRef } from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

function Dropdown(props) {
  const ref = useRef(null);

  const handleDropdown = () => {
    const { toggler } = props;
    toggler();
  };

  const handleProfile = () => {
    const { togglerProfile } = props;
    togglerProfile();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <Ul ref={ref}>
      <Li onClick={() => handleProfile()}>Profile</Li>
      <Li onClick={() => console.log('sign out')}>Sign out</Li>
    </Ul>
  );
}

const Ul = styled.ul(() => [
  tw`absolute top-12 right-0 bg-white py-4`,
  css`
    width: 140px;
    border-radius: 8px;
  `,
]);

const Li = styled.li(() => [
  tw`px-4 py-1 cursor-pointer font-worksans text-size_8x`,
  css`
    color: #160d1c;

    :hover {
      background-color: #88304e;
      ${tw`text-white`}
    }
  `,
]);

export default Dropdown;
