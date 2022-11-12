import styles from '@/styles/containers/paginationPage.module.scss';
import Batch from '@/animations/Batch';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';
import { Adverts, PageData, Response, AdData } from '../typings';

interface Props {
  data: AdData[];
  meta: PageData;
}
const PaginatedPage = ({ data, meta }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <h1 id='heading'>Our</h1>
            <h1 id='heading'>Work</h1>
          </div>

          <div className={styles.desc}>
            <p className='fullscreen' id='split-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <Batch>
            <div className={styles.grid}>
              {data.map(({ title, image, id, brand, slug, image_width, image_height }) => {
                return (
                  <Card
                    key={id}
                    title={title}
                    image={image}
                    brand={brand}
                    slug={slug}
                    image_width={image_width}
                    image_height={image_height}
                  />
                );
              })}
            </div>
          </Batch>
        </div>
        <Pagination
          totalItems={meta.pagination.total}
          currentPage={meta.pagination.page}
          itemsPerPage={meta.pagination.pageSize}
          totalPages={meta.pagination.pageCount}
          renderPageLink={page => `/work?=${page}`}
        />
      </div>
    </div>
  );
};

export default PaginatedPage;
