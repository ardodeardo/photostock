import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';
import { isEmpty } from 'lodash';

import Layout from '../../components/shared/Layout';
import Button from '../../components/common/Button';
import Card from '../../components/shared/Card';

import { RiArrowDownSFill } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';

function Search() {
  const temp =
    'https://media.istockphoto.com/vectors/searching-investigation-and-research-concept-vector-id1341425786?b=1&k=20&m=1341425786&s=170667a&w=0&h=b0JTGvBbE6jkVzV8n45TwxGypocpkU7wCLPMiyjUxpE=';
  const dummy = [
    {
      img: temp,
    },
    {
      img: temp,
    },
    {
      img: temp,
    },
    {
      img: temp,
    },
    {
      img: temp,
    },
    {
      img: temp,
    },
  ];
  const [result, setResult] = useState(dummy);

  const handleLoadMore = () => {
    console.log('load more');
  };
  return (
    <Layout>
      <section>
        <div
          tw="bg-brand-gray-light"
          css={[css({ boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.12)' })]}
        >
          <Container>
            <div tw="flex justify-between items-center w-full py-5">
              <div>
                <SearchBox>
                  <GoSearch tw="block absolute left-5 top-1/2 transform -translate-y-1/2 text-brand-purple-light text-size_10x" />
                  <input
                    type="text"
                    tw="w-full h-full pl-15 pr-5 font-worksans text-black"
                    // css={css({ color: '#cccccc' })}
                    placeholder="Search Image, illustration, and photo"
                  />
                </SearchBox>
              </div>

              <div>
                <div tw="flex gap-x-5">
                  <Button size="sm" color="gray">
                    Category{' '}
                    <span tw="inline-block align-middle ml-1">
                      <RiArrowDownSFill
                        tw="text-brand-purple-medium"
                        // css={[css({ transform: dropdown ? 'rotate(-180deg)' : '' })]}
                      />
                    </span>
                  </Button>
                  <Button size="sm" color="gray">
                    type{' '}
                    <span tw="inline-block align-middle ml-1">
                      <RiArrowDownSFill
                        tw="text-brand-purple-medium"
                        // css={[css({ transform: dropdown ? 'rotate(-180deg)' : '' })]}
                      />
                    </span>
                  </Button>
                  <Button size="sm" color="gray">
                    Popular{' '}
                    <span tw="inline-block align-middle ml-1">
                      <RiArrowDownSFill
                        tw="text-brand-purple-medium"
                        // css={[css({ transform: dropdown ? 'rotate(-180deg)' : '' })]}
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          {isEmpty(result) ? (
            <NotFound>
              <div tw="w-full text-center">
                <Illustration src={temp} alt="no collection" />
                <h3 tw="font-worksans text-size_16x text-brand-purple-medium mt-9">
                  You don't have a collection yet
                </h3>
                <p tw="font-worksans text-size_9x text-brand-purple-medium mt-2">
                  Let's explore images based on your passion and lifestyle.
                </p>
                <Link to="/search/">
                  <Button size="xs" tw="mt-16 w-44">
                    Explore
                  </Button>
                </Link>
              </div>
            </NotFound>
          ) : (
            <div tw="pt-12 pb-44 text-center">
              <div tw="grid grid-cols-4 gap-x-6 gap-y-8">
                {result.map((item) => (
                  <Card img={item.img}></Card>
                ))}
              </div>
              <Button size="sm" tw="mx-auto mt-22 mx-auto" onClick={() => handleLoadMore()}>
                Load More
              </Button>
            </div>
          )}
        </Container>
      </section>
    </Layout>
  );
}

const Container = styled.div(() => [
  tw`w-full mx-auto`,
  css`
    max-width: 1640px;
  `,
]);

const SearchBox = styled.div(() => [
  tw`relative h-12 mx-auto overflow-hidden`,
  css`
    width: 720px;
    border-radius: 48px;
  `,
]);

const NotFound = styled.div(() => [
  css`
    padding-top: 120px;
    padding-bottom: 150px;
  `,
]);

const Illustration = styled.img(() => [
  tw`mx-auto`,
  css`
    width: 350px;
    border-radius: 48px;
  `,
]);

export default Search;
