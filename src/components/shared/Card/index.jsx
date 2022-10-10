import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';
import { isEmpty } from 'lodash';

import { AiFillHeart, AiOutlineHeart, AiFillEye } from 'react-icons/ai';
import { FaCloudDownloadAlt } from 'react-icons/fa';

function Card(props) {
  return (
    <>
      <Thumbnail>
        <img src={props.img} alt="collection image" tw="object-cover" loading="lazy" />
        <Overlay>
          <div tw="flex flex-col justify-between w-full h-full">
            <div>
              {props.collected ? (
                <AiFillHeart tw="ml-auto text-size_10x" />
              ) : (
                <AiOutlineHeart tw="ml-auto text-size_10x" />
              )}
            </div>
            <div>
              <ul tw="flex justify-center gap-x-5">
                <li>
                  <button tw="flex justify-center items-center align-middle">
                    <AiFillEye />
                    <span tw="text-size_7x pl-1">2.1k</span>
                  </button>
                </li>
                <li>
                  <button tw="flex justify-center items-center align-middle">
                    <AiFillHeart />
                    <span tw="text-size_7x pl-1">3k</span>
                  </button>
                </li>
                <li>
                  <button tw="flex justify-center items-center align-middle">
                    <FaCloudDownloadAlt />
                    <span tw="text-size_7x pl-1">300</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Overlay>
      </Thumbnail>
    </>
  );
}

const Thumbnail = styled.div(() => [
  tw`aspect-w-16 aspect-h-9 overflow-hidden cursor-pointer bg-brand-gray-medium`,
  css`
    border-radius: 32px;
  `,
]);

const Overlay = styled.div(() => [
  tw`absolute top-0 left-0 w-full h-full px-6 py-4`,
  tw`transition-opacity duration-300 text-white text-size_8x font-worksans`,
  css`
    opacity: 0;
    background-color: rgba(22, 13, 28, 0.43);

    &:hover {
      opacity: 1;
    }
  `,
]);

export default Card;
