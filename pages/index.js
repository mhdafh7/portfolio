import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <div className={styles.container}>
            <Head>
                <title>Mhdafh | Portfolio</title>
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
            {loading ? <Loader setLoading={setLoading} /> : null}
            <Header />
            <main className={styles.main}>
                <Hero />
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
