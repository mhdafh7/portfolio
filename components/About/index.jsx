import styles from "./About.module.scss"

const About = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>
                        Hey, I am Muhammed Aflah<span>.</span>
                    </h3>
                </div>
                <div className={styles.bio}>
                    <p>
                        Love making pixel perfect interfaces, and write clean
                        server side code. I am passionate about web technologies
                        and the creative experiences they create.
                    </p>
                    <p>
                        Well if you are not interested in those things, follow
                        me on twitter and we can fight over football opinions :)
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About
