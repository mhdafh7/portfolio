import styles from "../styles/Header.module.scss"
import Navbar from "./Navbar"
const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h3>Mhdafh.</h3>
                </div>
                <Navbar />
            </div>
        </>
    )
}
export default Header
