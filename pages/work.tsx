import { useState } from 'react';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Work from '../containers/Work/Work';
import useSwr from 'swr';
import { fetcher } from './api/api.js';
import styles from '@/styles/work.module.css';
import cn from 'classnames';
import Button from '@/components/Button/Button';
import { Response } from '../typings';

const WorkPage: NextPage = ({
  ads,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [key, setKey] = useState('');
  const { data } = useSwr(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=12`,
    fetcher,
    { fallbackData: ads }
  );

  console.log(data.meta.pagination);
  return (
    <div className='primary-bg'>
      <div className='container'>
        <div className='of-h fsz-xl ht-auto'>
          <h1 id='heading'>Our</h1>
          <h1 className='mr-lft' id='heading'>
            Work
          </h1>
        </div>

        <div className='mr-auto mx-width fullscreen mx-m'>
          <p id='split-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className='mt-xl of-h'>
          <Work response={data} />
        </div>
        <div className='m-inline mt-m'>
          <button
            className={cn(pageIndex > 1 ? 'btn-secondary' : 'btn-disabled')}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}>
            &#8592;
          </button>
          <span className='ml-m'>{`${pageIndex} of ${
            data && data.meta.pagination.pageCount
          }`}</span>
          <button
            className={cn(
              pageIndex === (data && data.meta.pagination.pageCount)
                ? 'btn-disabled ml-m'
                : 'btn-secondary ml-m'
            )}
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;

export const getStaticProps: GetStaticProps = async context => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const adsRes: Response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*&pagination[page]=1&pagination[pageSize]=12`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  return {
    props: {
      ads: adsRes,
    },
  };
};
