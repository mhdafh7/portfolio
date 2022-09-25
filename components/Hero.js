import styles from "../styles/Hero.module.scss"
import Cta from "./Cta"
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textAndNav}>
                <p className={styles.description}>Hey! I&apos;m Aflah.</p>
                <h1 className={styles.title}>
                    Full stack
                    <br />
                    developer.
                </h1>
                <p className={styles.description}>
                    Browser is my canvas. Coding is my paint.
                </p>
                <Navbar />
            </div>
            <div className={styles.ctaContainer}>
                <Cta classname="fill" text="Let's get in touch "/>
                <Cta classname="outline" text="Resume "/>
            </div>
        </div>
    )
}
export default Hero
