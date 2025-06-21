import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  // const [direction, setDirection] = useState("down")
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        getDirection: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Header />

      <div
        className={styles.container}
        data-scroll-container
        ref={containerRef}
      >
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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {loading ? <Loader setLoading={setLoading} /> : null}

        <motion.main className={styles.main}>
          <Hero data-scroll-section />
          <About data-scroll-section />
        </motion.main>
        <motion.div
          className={styles.radiusDiv}
          data-scroll
          data-scroll-speed="1"
        ></motion.div>
        <Footer data-scroll-section />
      </div>
    </LocomotiveScrollProvider>
  );
}
