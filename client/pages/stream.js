import Head from "next/head";
import styles from "../styles/Stream.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default function LiveStream() {
  return (
    <>
      <Head>
        <title>Tropics || Live Stream</title>
        <link rel="icon" href="/logoIcon.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Link href="https://www.dlive.tv/Tropics" passHref={true}>
              Dlive.tv/Tropics
            </Link>
          </h1>
          <div className={styles.info}>
            <figure>
              <iframe className={styles.player}
                src="https://www.dlive.tv/Tropics"
                width="100%"
                height="500px"
              ></iframe>
            </figure>
            <p className={styles.about}>
              Thanks for stopping by! I’m Doug, a{" "}
              <strong>web application developer</strong> working out of Orlando
              Florida. I work with <strong>JavaScript</strong> and frameworks
              like <strong>React</strong> and <strong>Vue</strong>. For
              server-side code I use <strong>NodeJS</strong>. I’m also a BJJ
              Blue belt and happen to love playing video games!
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
