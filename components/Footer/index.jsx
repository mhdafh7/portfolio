import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className={styles.container} id="Contact">
      <motion.h3 className={styles.title} data-scroll data-scroll-speed="-3">
        Get in touch<span>.</span>
      </motion.h3>
      <div className={styles.cardAndLinks}>
        <motion.div
          className={styles.card}
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <h4 className={styles.jobTitle}>Full stack developer.</h4>
          <h4 className={styles.contactDetail}>m.aflah@proton.me</h4>
          <h4 className={styles.placeholder}>----------------</h4>
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
                href="https://docs.google.com/document/d/1zTI9Xv18q7IhKMqcN1mai9nMI64uA3G0G62LylRp230/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
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
