import React from 'react';
import { Link } from 'react-router-dom';
import 'twin.macro';

import { Content, Heading, Context } from './styles';

const Errors = () => {
  return (
    <Content>
      <Heading>404</Heading>
      <Context>
        Ups, Page not found!
      </Context>

      <div tw="flex justify-center mt-6">
        <Link
          tw="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </Content>
  );
};

export default Errors;
