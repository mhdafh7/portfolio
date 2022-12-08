import styles from "./Navbar.module.scss"
import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className={styles.container}>
                <ul>
                    <Link href="projects">
                        <li className={styles.navItem}>Projects</li>
                    </Link>
                    <Link href="/404">
                        <li className={styles.navItem}>
                            About
                        </li>
                    </Link>
                    <Link href="/404">
                        <li className={`${styles.navItem} ${styles.contact}`}>
                            Contact
                        </li>
                    </Link>
                </ul>
            </nav>
            <div className={styles.mobileContainer}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </>
    )
}
export default Navbar
