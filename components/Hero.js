import styles from "../styles/Hero.module.scss"
import Cta from "./Cta"
// import Navbar from "./Navbar"

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textAndCta}>
                <p className={styles.description}>Hey! I&apos;m Aflah.</p>
                <h1 className={styles.title}>
                    A Front-end <br /> developer.
                </h1>
                <div className={styles.ctaContainer}>
                    <a href="mailto:mhdaflah@tuta.io">
                        <Cta
                            classname="fill"
                            text="Let's get in touch /> "
                            title="mhdaflah@tuta.io"
                        />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1qkae_X192lXVY6kS3DPj06Cfvelpbj6C/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Cta classname="outline" text="My Resume />" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero
