import React from 'react';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';

// import Routes from '../../routers/index';

// -- Components
import Layout from '../../components/Layout';

const Home = () => {
  const dataSet = [
    {
      title: 'PHOTOS',
      img: '',
    },
    {
      title: 'VECTOR GRAPHICS',
      img: '',
    },
    {
      title: 'ILLUSTRATIONS',
      img: '',
    },
  ];

  const categories = [
    {
      title: 'Background',
      url: '',
    },
    {
      title: 'Nature',
      url: '',
    },
    {
      title: 'Fashion',
      url: '',
    },
    {
      title: 'Education',
      url: '',
    },
    {
      title: 'Music',
      url: '',
    },
    {
      title: 'More Categories',
      url: '',
    },
  ];

  return (
    <Layout>
      {/* <Routes /> */}
      <section id="searcharea">
        <SearchBoxArea>
          <Container>
            <h1 tw="font-montserrat font-medium text-size_16x">
              Stunning free images & royalty free stock
            </h1>
            <p tw="font-worksans text-size_10x mt-5" css={css({ color: '#cccccc' })}>
              Over 2.4 million+ high quality stock images, videos and music shared by our talented
              community.
            </p>

            <SearchBox>
              <input
                type="text"
                tw="w-full h-full pl-15 font-worksans text-black"
                // css={css({ color: '#cccccc' })}
                placeholder="Search Image, illustration, and photo"
              />
            </SearchBox>
            <ul tw="flex mx-auto mt-10" css={[css({ width: 'fit-content' })]}>
              {categories.map((item) => (
                <List key={`list-${item.title}`}>
                  <a href={item.url}>{item.title}</a>
                </List>
              ))}
            </ul>
          </Container>
        </SearchBoxArea>
      </section>

      <section id="typephoto" tw="py-26">
        <Container>
          <InnerContainer>
            <div tw="text-center">
              <h2 tw="font-montserrat font-semibold text-size_20x">Type Photo Stock</h2>
              <div tw="flex gap-x-10 mt-18">
                {dataSet.map((item) => (
                  <Thumbnail tw="relative bg-black" key={`thumb-${item.title}`}>
                    <img src="" alt="" />
                    <div tw="flex justify-center items-center w-full h-full absolute top-0 left-0 py-6 px-9">
                      <h3 tw="font-worksans text-size_16x text-white">{item.title}</h3>
                    </div>
                  </Thumbnail>
                ))}
              </div>
            </div>
          </InnerContainer>
        </Container>
      </section>

      <section id="information" css={css({ backgroundColor: '#f8f8f8' })}>
        <Container>
          <InnerContainer>
            <div tw="py-10 text-center" css={css({ color: '#311d3f' })}>
              <h2 tw="font-montserrat font-semibold text-size_16x">Free Images</h2>
              <p tw="font-worksans text-size_10x mt-6">
                PhotoStock is a vibrant community of creatives, sharing copyright free images,
                videos and music. <br />
                All contents are released under the PhotoStock License, which makes them safe to use
                without asking <br />
                for permission or giving credit to the artist - even for commercial purposes.
              </p>
            </div>
          </InnerContainer>
        </Container>
      </section>
    </Layout>
  );
};

const SearchBoxArea = styled.div(() => [
  tw`text-white text-center pt-15 pb-20`,
  css`
    background-image: linear-gradient(to bottom, #160d1c, #311d3f);
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
  `,
]);

const SearchBox = styled.div(() => [
  tw`mt-13 h-15 mx-auto overflow-hidden`,
  css`
    width: 720px;
    border-radius: 48px;
  `,
]);

const Container = styled.div(() => [
  tw`w-full mx-auto`,
  css`
    max-width: 1640px;
  `,
]);

const InnerContainer = styled.div(() => [
  tw`w-full mx-auto`,
  css`
    max-width: 1042px;
  `,
]);

const Thumbnail = styled.div(() => [
  css`
    width: 320px;
    height: 200px;
    border-radius: 16px;
  `,
]);

const List = styled.li(() => [
  tw`block relative mr-6`,
  css`
    :not(:last-child) {
      &::after {
        display: block;
        content: '';
        width: 1px;
        height: 70%;
        border-right: 1px solid white;
        position: absolute;
        right: -12px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  `,
]);

export default Home;
