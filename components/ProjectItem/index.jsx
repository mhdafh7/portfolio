import { useState } from "react";
import Image from "next/image";
import styles from "./ProjectItem.module.scss";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters";
import { variantParent, variantChild } from "../../constants/constants";
import Hover from "../ProjectCardHover";

const ProjectItem = ({ title, img, tags, deployedLink, codeLink }) => {
  const [hovered, setHovered] = useState({
    deployed: null,
    code: null,
    hovered: false,
  });

  const handleMouseEnter = () => {
    setHovered({
      deployed: deployedLink,
      code: codeLink,
      hovered: true,
    });
  };
  const handleMouseLeave = () => {
    setHovered({
      deployed: null,
      code: null,
      hovered: false,
    });
  };
  return (
    <figure className={styles.container}>
      <div className={styles.about}>
        <AnimatedLetters text={title} className={styles.title} />
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
      <div
        className={styles.img}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered.hovered ? <Hover /> : null}
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
