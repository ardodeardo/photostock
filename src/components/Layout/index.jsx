import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header/index';
import Footer from '../Footer/index';

import { Main } from './styles';

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <title>PhotoStock</title>
      </Helmet>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
