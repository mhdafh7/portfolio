import styles from "../styles/Header.module.scss"
import Navbar from "./Navbar"
const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h3>Mhdafh.</h3>
                </div>
                <Navbar />
            </div>
        </header>
    )
}
export default Header
