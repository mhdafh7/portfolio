import Image from "next/image"
import styles from "../styles/ProjectItem.module.scss"

const ProjectItem = ({ title, img, tags }) => {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.tags}>
                    {tags.map(tag => (
                        <h4 key={tag} className={styles.tag}>{tag}</h4>
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
        </div>
    )
}
export default ProjectItem
