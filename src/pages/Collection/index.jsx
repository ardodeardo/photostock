import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';
import 'styled-components/macro';
import { isEmpty } from 'lodash';

import Layout from '../../components/shared/Layout';
import Button from '../../components/common/Button';
import Card from '../../components/shared/Card';

function Collection() {
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
  const [collections, setCollections] = useState(dummy);

  const categories = [{ title: 'Photo' }, { title: 'Vector Graphics' }, { title: 'Illustrations' }];

  const count = 0;

  return (
    <Layout>
      <section>
        <div tw="p-12 text-center">
          <Container>
            <h1 tw="font-montserrat font-bold text-size_28x">My Collections</h1>
          </Container>
        </div>
        <div
          tw="bg-brand-gray-light"
          css={[css({ boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.12)' })]}
        >
          <Container>
            <div tw="flex justify-between items-center w-full py-5">
              <div>
                <ul tw="flex gap-x-5">
                  <li>
                    <Button size="sm" color="gray" active>
                      All
                    </Button>
                  </li>
                  {categories.map((item) => (
                    <li>
                      <Button size="sm" color="gray">
                        {item.title}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span tw="font-worksans text-size_8x text-brand-purple-medium">
                  Total Collections: <b tw="text-brand-red">{count}</b>
                </span>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            {isEmpty(collections) ? (
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
              <div tw="pt-12 pb-44">
                <div tw="grid grid-cols-4 gap-x-6 gap-y-8 ">
                  {collections.map((item) => (
                    <Card img={item.img} collected></Card>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </div>
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

export default Collection;
