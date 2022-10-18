import Menu from '../../components/Menu/Menu';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';
type Props = {
  color?: string;
};

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Menu />
        <div className={styles.wrap}>
          <Link href='/'>
            <a className={styles.logo}>Airone</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
