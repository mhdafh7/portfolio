import styles from "../styles/Cta.module.scss"
import SplitText from "./SplitText"

const Cta = ({ classname, text }) => (
    <div className={`${styles.container} ${styles[classname]}`}>
        <div className={styles.wrapper}>
            <SplitText text={text} role="button" />
        </div>
    </div>
)
export default Cta
