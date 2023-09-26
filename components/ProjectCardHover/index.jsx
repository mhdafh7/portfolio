import { motion } from "framer-motion";
import { Code, Link } from "react-feather";
import styles from "./ProjectCardHover.module.scss";

const Hover = ({ codeLink, deployedLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <a
        className={styles.button}
        href={deployedLink}
        target="_blank"
        rel="noreferrer"
      >
        <Link />
        Deployed
      </a>
      <a
        className={styles.button}
        href={codeLink}
        rel="noreferrer"
        target="_blank"
      >
        <Code />
        Code
      </a>
    </motion.div>
  );
};
export default Hover;
