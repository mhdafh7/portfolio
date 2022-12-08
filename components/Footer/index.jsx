import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.container}>
            <h3 className={styles.title}>Get in touch.</h3>
            <div className={styles.cardAndLinks}>
                <div className={styles.card}>
                    <h4 className={styles.jobTitle}>Full stack developer.</h4>
                    <h4 className={styles.contactDetail}>mhdaflah@tuta.io</h4>
                    <h4 className={styles.contactDetail}>+91 701 283 2060</h4>
                    <h3>Muhammed <br /> Aflah.</h3>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>Linkedin</li>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>Resume</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer
