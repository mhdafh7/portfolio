import Image from "next/image"
import styles from "../styles/ProjectItem.module.scss"

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
                    width={100}
                    height={200}
                    alt={title}
                />
            </div>
        </figure>
    )
}
export default ProjectItem
