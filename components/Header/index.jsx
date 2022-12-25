import styles from './Header.module.scss';
import Navbar from '../Navbar';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { motion } from 'framer-motion';

// function useScrollDirection() {
//     const [scrollDirection, setScrollDirection] = useState(null);

//     useEffect(() => {
//         let lastScrollY = window.pageYOffset;

//         const updateScrollDirection = () => {
//             const scrollY = window.pageYOffset;
//             const direction = scrollY > lastScrollY ? 'down' : 'up';
//             if (
//                 direction !== scrollDirection &&
//                 (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
//             ) {
//                 setScrollDirection(direction);
//             }
//             lastScrollY = scrollY > 0 ? scrollY : 0;
//         };
//         window.addEventListener('scroll', updateScrollDirection); // add event listener
//         return () => {
//             window.removeEventListener('scroll', updateScrollDirection); // clean up
//         };
//     }, [scrollDirection]);

//     return scrollDirection;
// }

const Header = () => {
  const { scroll } = useLocomotiveScroll();
  const scrollToComponent = (e, target) => {
    e.preventDefault();
    scroll && scroll.scrollTo(target);
  };
  return (
    <motion.header
      className={styles.wrapper}
      initial={{ y: '-10vh' }}
      // animate={scrollDirection === 'down' ? { top: '-10vh' } : {}}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.7, duration: 0.7 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3
            onClick={(e) => {
              scrollToComponent(e, 0);
            }}
          >
            Mhdafh.
          </h3>
        </div>
        <Navbar />
      </div>
    </motion.header>
  );
};
export default Header;
