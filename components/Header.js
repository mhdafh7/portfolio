import styles from "../styles/Header.module.scss"
const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a>
                        <img src="../public/Logo.svg" alt="Mhdafh." />
                    </a>
                </div>
                <div className={styles.navContainer}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>Linkedin</li>
                        <li className={styles.navItem}>Github</li>
                        <li className={styles.navItem}>Dribble</li>
                        <li className={styles.navItem}>Resume</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header
