import styles from "../styles/About.module.scss"

const About = () => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
              <div className={styles.title}>
                  Web <br />
                  Craftsman
              </div>
              <div className={styles.desc}>
                <p>
                  I&apos;m Muhammed Aflah, <br />
                  I make pixel perfect interfaces <br />
                  and write clean server side code <br />
                  for the <span>Web</span>.
                </p>
              </div>
          </div>
        </div>
    )
}
export default About
