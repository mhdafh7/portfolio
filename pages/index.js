import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Muhammed Aflah | Portfolio</title>
                <meta
                    name="description"
                    content="Developer portfolio of Muhammed Aflah"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1"
                ></meta>
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <Header />
            <main className={styles.main}>
                <Hero />
                <About />
                <Projects />
            </main>
        </div>
    )
}
