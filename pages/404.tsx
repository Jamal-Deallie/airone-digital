import type { NextPage } from 'next';
import styles from '@/styles/containers/notFound.module.scss';
type Props = {};

const Custom404Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <h1>404</h1>
        <p>This page does not exist</p>
      </div>
    </div>
  );
};

export default Custom404Page;
