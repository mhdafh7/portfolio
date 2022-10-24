import styles from "../styles/Hero.module.scss"

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blob}></div>

            <h1 className={styles.title}>
                I make things
                <br />
                for the <span>web.</span>
            </h1>
        </div>
    )
}
export default Hero
