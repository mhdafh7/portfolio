import styles from './About.module.scss';

const About = () => {
    return (
        <section
            className={styles.container}
            id="About"
        >
            <div className={styles.frameItem}>
                <div className={styles.title}>
                    <h3>
                        <span>I am</span> <br /> Muhammed Aflah<span>.</span>
                    </h3>
                </div>
            </div>
            <div className={styles.frameItem}>
                <p className={styles.bio}>
                    Love making pixel perfect interfaces, and write clean server side
                    code. I am passionate about web technologies and the creative
                    experiences they create<span>.</span>
                </p>
            </div>
            <div className={styles.frameItem}>
                <p className={styles.bio}>
                    Well if you are not interested in those things, follow me on twitter
                    and we can fight over football opinions <span>:)</span>
                </p>
            </div>
        </section>
    );
};
export default About;
