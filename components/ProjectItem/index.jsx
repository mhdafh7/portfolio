import Image from "next/image"
import styles from "./ProjectItem.module.scss"

const ProjectItem = ({ title, img, tags }) => {
    return (
        <figure className={styles.container}>
            <div className={styles.about}>
                <figcaption className={styles.title}>{title}</figcaption>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <div
                            key={tag}
                            className={styles.tag}
                        >
                            <h4>{tag}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.img}>
                <Image
                    src={img}
                    layout="fill"
                    alt={title}
                />
            </div>
        </figure>
    )
}
export default ProjectItem
