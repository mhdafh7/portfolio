import Image from 'next/image';
import styles from './ProjectItem.module.scss';
import { motion } from 'framer-motion';
import AnimatedLetters from '../AnimatedLetters';
import { variantParent, variantChild } from '../../constants/constants';

const ProjectItem = ({ title, img, tags }) => {
  return (
    <figure className={styles.container}>
      <div className={styles.about}>
        <AnimatedLetters
          text={title}
          className={styles.title}
        />
        <motion.div
          variants={variantParent}
          className={styles.tags}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          {tags.map((tag) => (
            <motion.div
              key={tag}
              className={styles.tag}
              variants={variantChild}
            >
              <h4>{tag}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className={styles.img}>
        <Image
          src={img}
          layout="fixed"
          width={700}
          height={1400}
          alt={title}
          priority
          data-scroll
          data-scroll-speed="1"
        />
      </div>
    </figure>
  );
};
export default ProjectItem;
