import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
    <Head>
        <title>Tropics || Web Application Developer</title>
        <link rel="icon" href="/logoIcon.png" />
    </Head>
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi I'm Tropics!</h1>
        <div className={styles.info}>
          <p className={styles.about}>
            Thanks for stopping by! I’m Doug, a{" "}
            <strong>web application developer</strong> working out of Orlando
            Florida. I work with <strong>JavaScript</strong> and frameworks like{" "}
            <strong>React</strong> and <strong>Vue</strong>. For server-side
            code I use <strong>NodeJS</strong>. I’m also a BJJ Blue belt and
            happen to love playing video games!
          </p>
        </div>
      </main>
    </Layout>
    </>
  );
}
