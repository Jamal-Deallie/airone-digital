import { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Work from '../containers/Work/Work';
import useSwr from 'swr';
import { fetcher } from './api/api.js';
import styles from '../styles/containers/work.module.css';
import cn from 'classnames';
import { UseSanitizeResponse } from '../hooks/useSanitizeResponse';
import { AdsResults } from '../types/index';
type WorkProps = {
  data: object;
  ads: any[];
};

const WorkPage: NextPage = ({ ads }: WorkProps) => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = useSwr(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=12`,
    fetcher,
    { fallbackData: ads }
  );
  return (
    <div>
      <Work results={data} />
      <div>
        <button
          className={cn(
            pageIndex === (data && data.meta.pagination.pageCount)
              ? [styles.active]
              : [styles.disabled]
          )}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}>
          Previous
        </button>
        <button
          className={cn(
            pageIndex === (data && data.meta.pagination.pageCount)
              ? [styles.active]
              : [styles.disabled]
          )}
          disabled={pageIndex === (data && data.meta.pagination.pageCount)}
          onClick={() => setPageIndex(pageIndex + 1)}>
          Next
        </button>
        <span>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</span>
      </div>
    </div>
  );
};

export default WorkPage;

export const getStaticProps: GetStaticProps = async context => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const adsRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*&pagination[page]=1&pagination[pageSize]=12`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ads: adsRes,
    },
  };
};
