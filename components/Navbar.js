import styles from "../styles/Navbar.module.scss"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li className={styles.navItem}>Home</li>
                <Link href="/404">
                    <li className={`${styles.navItem} ${styles.inactive}`}>
                        About
                    </li>
                </Link>
                <Link href="/404">
                    <li className={`${styles.navItem} ${styles.inactive}`}>
                        Projects
                    </li>
                </Link>
                <Link href="/404">
                    <li className={`${styles.navItem} ${styles.inactive}`}>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    )
}
export default Navbar