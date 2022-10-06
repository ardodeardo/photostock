import React from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';
import { Link } from 'react-router-dom';

import { VscChromeClose } from 'react-icons/vsc';

function ModalCategories(props) {
  const handleClose = () => {
    const { toggler } = props;
    toggler();
  };

  const dataSet = [
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
    { title: 'nature' },
  ];

  return (
    <Modal tw="h-screen w-full">
      <div tw="h-full w-full flex justify-center items-center">
        <Content>
          <div tw="text-size_8x pt-7 text-right">
            <button tw="ml-auto" onClick={() => handleClose()}>
              <VscChromeClose />
            </button>
          </div>
          <div tw="px-12">
            <div tw="text-center">
              <h3 tw="font-montserrat font-medium text-size_16x">Categories</h3>
            </div>
            <div tw="mt-10">
              <ul tw="grid grid-cols-4 gap-x-8 gap-y-4 ">
                {dataSet.map((item, idx) => (
                  <li key={`categories-${item.title}-${idx}`}><Link to="/">{item.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </Content>
      </div>
    </Modal>
  );
}

const Modal = styled.div(() => [
  tw`fixed top-0 left-0 right-0 mx-auto z-20`,
  css`
    background-color: rgba(49, 29, 63, 0.39);
  `,
]);

const Content = styled.div(() => [
  tw`overflow-hidden bg-white px-8 pb-16`,
  css`
    width: 763px;
    min-height: 360px;
    border-radius: 32px;
  `,
]);

export default ModalCategories;
