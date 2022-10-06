import React, { useState, useEffect, useRef } from 'react';

import { Helmet } from 'react-helmet';

import Header from '../Header/index';
import Footer from '../Footer/index';
import ModalProfile from '../Profile/index';

import { Main } from './styles';

const Layout = (props) => {

  const [modalProfile, setModalProfile] = useState(false);

  const handleModalProfile = () => {
    setModalProfile(!modalProfile);
  };

  return (
    <>
      <Helmet>
        <title>PhotoStock</title>
      </Helmet>
      <Header togglerProfile={handleModalProfile}></Header>
      <Main>{props.children}</Main>
      {modalProfile && <ModalProfile toggler={handleModalProfile} />}
      <Footer />
    </>
  );
};

export default Layout;
