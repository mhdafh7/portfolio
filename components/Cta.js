import styles from "../styles/Cta.module.scss"
import { ArrowRightShort } from "react-bootstrap-icons"
const Cta = ({ classname,text }) => (
    <div className={`${styles.container} ${styles[classname]}`}>
        <div className={styles.wrapper}>
            <h3>
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                {text}
            </h3>
            <ArrowRightShort className={styles.icon} />
        </div>
    </div>
)
export default Cta
