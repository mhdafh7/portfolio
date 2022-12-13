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
                                href="https://www.linkedin.com/in/muhammed-aflah"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/mhdafh7"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1qkae_X192lXVY6kS3DPj06Cfvelpbj6C/view?usp=drivesdk"
                                target="_blank"
                                rel='noreferrer'
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
