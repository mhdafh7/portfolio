import styles from './Navbar.module.scss';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Navbar = () => {
  const { scroll } = useLocomotiveScroll();
  const scrollToComponent = (e, target, offset = 0) => {
    e.preventDefault();
    scroll &&
      scroll.scrollTo(target, {
        offset: offset,
      });
  };
  return (
    <>
      <nav className={styles.container}>
        <ul>
          <li
            className={styles.navItem}
            onClick={(e) => {
              scrollToComponent(e, '#About');
            }}
          >
            About
          </li>

          <li
            className={styles.navItem}
            onClick={(e) => {
              scrollToComponent(e, '#Projects', -100);
            }}
          >
            Projects
          </li>
          <li
            className={`${styles.navItem} ${styles.contact}`}
            onClick={(e) => {
              scrollToComponent(e, '#Contact');
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
      <div className={styles.mobileContainer}>
        <h3>MENU</h3>
      </div>
    </>
  );
};
export default Navbar;
