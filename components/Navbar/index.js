import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = ({ appName, page }) => (
  <nav className={styles.navbarContainer}>
    <div className={styles.navbarContent}>
      <Link href="/">
        <h3 className={styles.title}>
          {appName}
        </h3>
      </Link>
      <h3 className={styles.title}>
        {page}
      </h3>
    </div>
  </nav>
);

export default Navbar;
