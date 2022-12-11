import styles from './Projects.module.scss';
import ProjectItem from '../ProjectItem';

const projectItems = [
    {
        id: 1,
        title: 'Noteey',
        img: '/Image.jpg',
        tags: ['UI/UX', 'Next.js', 'Scss', 'Firebase'],
    },
    {
        id: 2,
        title: 'Bingolfy',
        img: '/Image.jpg',
        tags: ['UI/UX', 'Next.js', 'Socket.io', 'NodeJS'],
    },
];

const Projects = () => {
    return (
        <section
            className={styles.container}
            id="Projects"
        >
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Some things </h2>
                <h2 className={styles.title}>
                    I made<span>.</span>
                </h2>
            </div>
            <div className={styles.projectContainer}>
                {projectItems.map((item) => {
                    return (
                        <ProjectItem
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            tags={item.tags}
                        />
                    );
                })}
            </div>
        </section>
    );
};
export default Projects;
