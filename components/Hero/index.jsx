import styles from './Hero.module.scss';
import { motion } from 'framer-motion';
import AnimatedLetters from '../AnimatedLetters';

const Hero = () => {
    return (
        <motion.section
            className={styles.container}
            id="Home"
        >
            <AnimatedLetters
                className={styles.title}
                text={'I make'}
            />
            <AnimatedLetters
                className={styles.title}
                text={' things '}
                delay={1.35}
            />
            <AnimatedLetters
                className={styles.title}
                delay={1.75}
                text={'for the'}
            />
            <AnimatedLetters
                className={styles.title}
                delay={2.1}
                text={' web.'}
            />
        </motion.section>
    );
};
export default Hero;
