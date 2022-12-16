import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className={styles.container}>
                <ul>
                    <Link href="#About">
                        <li className={styles.navItem}>About</li>
                    </Link>
                    <Link href="#Projects">
                        <li className={styles.navItem}>Projects</li>
                    </Link>

                    <Link href="#Contact">
                        <li className={`${styles.navItem} ${styles.contact}`}>Contact</li>
                    </Link>
                </ul>
            </nav>
            <div className={styles.mobileContainer}>
                <h3>MENU</h3>
            </div>
        </>
    );
};
export default Navbar;
