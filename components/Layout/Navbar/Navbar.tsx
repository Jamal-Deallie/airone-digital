import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Menu />
        <div className={styles.wrap}>
          <Link href='/'>
            <a className={styles.logo}>
              <Image
                src={'/icons/airone.png'}
                alt='logo'
                width={200}
                height={57}
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
