import styles from './Footer.module.scss';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer
            className={styles.container}
            id="Contact"
        >
            <h3 className={styles.title}>
                Get in touch<span>.</span>
            </h3>
            <div className={styles.cardAndLinks}>
                <motion.div
                    className={styles.card}
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <h4 className={styles.jobTitle}>Full stack developer.</h4>
                    <h4 className={styles.contactDetail}>mhdaflah@tuta.io</h4>
                    <h4 className={styles.contactDetail}>+91 701 283 2060</h4>
                    <h3>
                        Muhammed <br /> Aflah.
                    </h3>
                </motion.div>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <a
                                href=""
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                target="_blank"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                target="_blank"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                target="_blank"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
