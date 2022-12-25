import styles from './Projects.module.scss';
import ProjectItem from '../ProjectItem';
import { motion } from 'framer-motion';
import { projectItems, variants } from '../../constants/constants';

const Projects = () => {
  return (
    <section
      className={styles.container}
      id="Projects"
    >
      <motion.div
        className={styles.titleContainer}
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          ease: 'easeIn',
          duration: 0.8,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          // variants={variants}
          className={styles.title}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
        >
          Some things
        </motion.h2>
        <motion.h2
          // variants={variants}
          className={styles.title}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
        >
          <span>I made.</span>
        </motion.h2>
      </motion.div>
      <div className={styles.projectContainer}>
        {projectItems.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              title={item.title}
              img={item.img}
              tags={item.tags}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
