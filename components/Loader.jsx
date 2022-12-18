import { motion } from 'framer-motion';
const Loader = ({ setLoading }) => {
    return (
        <motion.section
            style={{
                height: '120vh',
                width: '100vw',
                backgroundColor: 'black',
                zIndex: '99999',
                position: 'absolute',
            }}
            initial={{
                y: 0,
                borderRadius: '0% 0% 60% 60% / 10% 10% 2% 2%  ',
            }}
            animate={{
                y: '-120vh',
                borderRadius: '0% 0% 50% 50% / 10% 10% 0% 0% ',
            }}
            onAnimationComplete={() => {
                setLoading(false);
            }}
            transition={{
                ease: [0.6, 0.01, -0.05, 0.9],
                type: 'spring',
                bounce: 0.1,
                duration: 1.8,
            }}
        ></motion.section>
    );
};
export default Loader;
