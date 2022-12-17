import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { variants } from '../../constants/constants'

const About = () => {
    return (
        <section
            className={styles.container}
            id="About"
        >
            <div className={styles.frameItem}>
                <motion.div
                    className={styles.title}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{
                        ease: 'easeIn',
                        duration: 0.8,
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.h3 variants={variants}>
                        <span>Hey! I am</span> <br /> Muhammed Aflah<span>.</span>
                    </motion.h3>
                </motion.div>
            </div>
            <motion.div
                className={styles.frameItem}
                initial="offscreen"
                whileInView="onscreen"
                transition={{
                    ease: 'easeIn',
                    duration: 0.8,
                }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.p
                    variants={variants}
                    className={styles.bio}
                >
                    Love making pixel perfect interfaces, and write clean server side
                    code. I am passionate about web technologies and the creative
                    experiences they create<span>.</span>
                </motion.p>
            </motion.div>
        </section>
    );
};
export default About;
