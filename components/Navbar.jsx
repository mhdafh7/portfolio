import styles from "../styles/Navbar.module.scss"
import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <ul>
                    <Link href="/404">
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
            </div>
            <div className={styles.mobileContainer}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </>
    )
}
export default Navbar
