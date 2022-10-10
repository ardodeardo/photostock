import React from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

import Button from '../../components/common/Button';

const Login = () => {
  return (
    <Section>
      <div tw="mx-auto text-white text-center mt-22">
        <h1 tw="font-montserrat text-size_24x font-thin">
          Photo<span tw="text-brand-red font-bold">Stock</span>
        </h1>
        <p tw="font-worksans text-size_12x text-brand-gray-medium">
          Stunning free images & royalty free stock
        </p>
      </div>

      <Wrapper>
        <div>
          <h2 tw="font-montserrat font-medium text-size_16x">Welcome to PhotoStock</h2>
          <p tw="font-worksans font-thin text-size_10x mt-5 leading-6 text-brand-gray-medium">
            Please sign in to get free <br />
            photo stock & create your collection
          </p>
          <Button size="lg" tw="mt-20 w-4/5">Google Sign In</Button>
        </div>
        <div>
          <p tw="font-worksans text-size_8x text-brand-gray-medium">
            Copyright <span tw="text-brand-red">@happybaaga</span> 2022
          </p>
        </div>
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div(() => [
  css`
    width: 690px;
    height: 803px;
    padding-top: 118px;
    padding-left: 124px;
    padding-right: 124px;
    padding-bottom: 40px;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;

    background-color: #1e1226;
  `,
  tw`flex flex-col justify-between mx-auto text-white text-center mt-18`,
]);

const Section = styled.section(() => [
  css`
    background-image: linear-gradient(179deg, #311d3f 2%, #522546 98%);
  `,
  tw`min-h-screen flex flex-col justify-between`,
]);

export default Login;
