import Image from 'next/image';
import styles from './ProjectItem.module.scss';
import { motion } from 'framer-motion';
import AnimatedLetters from '../AnimatedLetters';
import { variantParent, variantChild } from '../../constants/constants';
import useWindowSize from '../../utils/windowResize';

const ProjectItem = ({ title, img, tags }) => {
  const windowSize = useWindowSize();
  console.log(windowSize);
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
        {windowSize.width > 576 ? (
          <Image
            src={img}
            layout="fixed"
            width={700}
            height={1200}
            alt={title}
            priority
            data-scroll
            data-scroll-speed="1"
          />
        ) : (
          <Image
            src={img}
            layout="fill"
            alt={title}
            priority
          />
        )}
      </div>
    </figure>
  );
};
export default ProjectItem;
