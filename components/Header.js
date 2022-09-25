import styles from "../styles/Header.module.scss"
const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a>
                        <svg
                            width="68"
                            height="15"
                            viewBox="0 0 68 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.888 14V2.624L6.448 9.824H7.392L11.968 2.624V14H13.12V0.4H11.968L6.928 8.448L1.888 0.4H0.72V14H1.888ZM22.9877 9.184V14H24.1557V9.184C24.1557 6.224 22.6197 4.288 20.1877 4.288C18.7157 4.288 17.5637 5.28 17.1797 6.64V0.4H16.0117V14H17.1797V9.2C17.1797 7.024 18.3637 5.44 20.0117 5.44C21.8197 5.44 22.9877 6.896 22.9877 9.184ZM35.374 14H36.542V0.384001H35.374V6.64C34.91 5.232 33.374 4.288 31.758 4.288C29.022 4.288 27.182 6.224 27.182 9.184C27.182 12.128 29.038 14.096 31.758 14.096C33.406 14.096 34.91 13.184 35.374 11.76V14ZM28.334 9.184C28.334 6.928 29.79 5.44 31.854 5.44C33.902 5.44 35.374 6.976 35.374 9.2C35.374 11.456 33.934 12.928 31.87 12.928C29.822 12.928 28.334 11.44 28.334 9.184ZM47.5242 14H48.6922V4.4H47.5242V6.64C47.0602 5.232 45.5242 4.288 43.9242 4.288C41.1882 4.288 39.3322 6.224 39.3322 9.184C39.3322 12.128 41.1882 14.096 43.9242 14.096C45.5562 14.096 47.0602 13.184 47.5242 11.76V14ZM40.5002 9.184C40.5002 6.928 41.9562 5.44 44.0202 5.44C46.0522 5.44 47.5242 6.976 47.5242 9.2C47.5402 11.456 46.1002 12.928 44.0202 12.928C41.9722 12.928 40.5002 11.44 40.5002 9.184ZM53.1448 14H54.3128V5.504H56.9208V4.4H54.3128V3.44C54.3128 2 54.8248 1.44 56.1048 1.44H56.9208V0.288H56.0088C54.0088 0.288 53.1448 1.184 53.1448 3.392V4.4H51.5448V5.504H53.1448V14ZM66.7033 9.184V14H67.8713V9.184C67.8713 6.224 66.3353 4.288 63.9033 4.288C62.4313 4.288 61.2793 5.28 60.8953 6.64V0.4H59.7273V14H60.8953V9.2C60.8953 7.024 62.0793 5.44 63.7273 5.44C65.5353 5.44 66.7033 6.896 66.7033 9.184Z"
                                fill="#EEEEEE"
                            />
                        </svg>
                    </a>
                </div>
                <div className={styles.socialContainer}>
                    <ul className={styles.socialList}>
                        <a
                            href="https://www.linkedin.com/in/muhammed-aflah"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li className={styles.socialItem}>Linkedin</li>
                        </a>
                        <a
                            href="https://github.com/mhdafh7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li className={styles.socialItem}>Github</li>
                        </a>
                        <a
                            href="https://dribbble.com/mhdafh"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li className={styles.socialItem}>Dribble</li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header
