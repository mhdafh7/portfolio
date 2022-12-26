import styles from './Footer.module.scss';
import { motion } from 'framer-motion';

const ListItem = ({ title, url }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1, textDecoration: 'underline' }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </motion.li>
  );
};

const urlList = [
  {
    id: 1,
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/muhammed-aflah',
  },
  {
    id: 2,
    title: 'Github',
    url: 'https://github.com/mhdafh7',
  },
  {
    id: 3,
    title: 'Showwcase',
    url: 'https://www.showwcase.com/mhdafh',
  },
  {
    id: 4,
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1qkae_X192lXVY6kS3DPj06Cfvelpbj6C/view?usp=drivesdk',
  },
];

const Footer = () => {
  return (
    <footer
      className={styles.container}
      id="Contact"
    >
      <motion.h3
        className={styles.title}
        data-scroll
        data-scroll-speed="-3"
      >
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
          <h4 className={styles.contactDetail}>mhdaflah@tuta.io</h4>
          <h4 className={styles.contactDetail}>+91 701 283 2060</h4>
          <h3>
            Muhammed <br /> Aflah.
          </h3>
        </motion.div>
        <div className={styles.links}>
          <ul>
            {urlList.map(({ id, title, url }) => {
              return (
                <ListItem
                  url={url}
                  title={title}
                  key={id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
