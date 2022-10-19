import styles from "../styles/Hero.module.scss"
import Cta from "./Cta"

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                I&apos;m Aflah, <br />
                Full stack dev <br/> from India.
            </h1>
        </div>
    )
}
export default Hero
