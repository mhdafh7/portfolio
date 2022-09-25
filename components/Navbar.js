import styles from "../styles/Navbar.module.scss"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Projects</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </div>
  )
}
export default Navbar