import React from 'react';
import { Link } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

import Layout from '../../components/shared/Layout';

const Errors = () => {
  return (
    <Layout>
      <section tw="flex justify-center items-center" css={[css({ height: '85vh' })]}>
        <Container>
          <div tw="text-center">
            <h1 tw="font-montserrat font-bold text-size_32x" css={[css({ color: '#e23e57' })]}>
              404
            </h1>
            <p tw="font-worksans text-size_12x" css={[css({ color: '#311d3f' })]}>
              Page not found
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

const Container = styled.div(() => [
  tw`w-full mx-auto`,
  css`
    max-width: 1640px;
  `,
]);

export default Errors;
