import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                I make things
                <br />
                for the <span>web.</span>
            </h1>
        </section>
    );
};
export default Hero;
