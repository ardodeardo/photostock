import React from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';
import { Link } from 'react-router-dom';

import Button from '../../common/Button';

import { VscChromeClose } from 'react-icons/vsc';

function ModalProfile(props) {
  const handleClose = () => {
    const { toggler } = props;
    toggler();
  };

  return (
    <Modal tw="h-screen w-full">
      <div tw="h-full w-full flex justify-center items-center">
        <Content>
          <div tw="text-size_8x py-7 text-right">
            <button tw="ml-auto" onClick={() => handleClose()}>
              <VscChromeClose />
            </button>
          </div>
          <div tw="px-8">
            <div tw="text-center">
              <div
                tw="mt-5 w-20 h-20 mx-auto rounded-full"
                css={[css({ backgroundColor: '#e23e57' })]}
              ></div>
              <h2 tw="font-montserrat text-size_16x mt-5">Hi, User</h2>
              <Link to="/">
                <Button size="sm" color="purple" tw="mt-5 w-3/4">
                  user@gmail.com
                </Button>
              </Link>
            </div>
            <div
              tw="mt-10 text-center flex flex-col"
              css={[css({ borderTop: '1px solid #cccccc' })]}
            >
              <Link to="/collection">
                <Button size="sm" tw="mt-10">
                  My Collection
                </Button>
              </Link>
              <Link to="/signout">
                <Button size="sm" color="white" tw="mt-10">
                  Sign Out
                </Button>
              </Link>
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
  tw`overflow-hidden bg-white p-8 pt-0`,
  css`
    width: 560px;
    min-height: 560px;
    border-radius: 32px;
  `,
]);

export default ModalProfile;
