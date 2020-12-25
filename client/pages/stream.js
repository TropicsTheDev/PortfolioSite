import Head from "next/head";
import styles from "../styles/Stream.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default function LiveStream() {
  return (
    <>
      <Head>
        <title>Tropics || Live Stream</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="On my livestream, I like to play video games, code, and have a good time! Feel free to stop in and say hi!"
        />
        <meta
          name="keywords"
          content="Tropics Web Application Developer, Tropics Live Streamer, Tropics Web Developer Live Stream, Tropics Web Developer Remote, Tropics Web Developer Orlando"
        />
        <meta name="author" content="Tropics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <main>
          <h1 className={styles.title}>
            <a href="https://www.dlive.tv/Tropics" target="_blank">
              Dlive.tv/Tropics
            </a>
          </h1>
          <div className={styles.info}>
            <figure>
              <iframe
                className={styles.player}
                src="https://www.dlive.tv/Tropics"
                width="100%"
                height="500px"
              ></iframe>
            </figure>
            <p className={styles.about}>
              My livestream is great place to interact in real-time. I mostly
              play <strong>video games</strong> and do personal{" "}
              <strong>coding projects</strong>. For the most part, I like to
              keep it laid back and authentic to have a good time.
            </p>
            <div className={styles.about}>
              <h2>Schedule</h2>
              <p>
                I don't have an active streaming schedule yet. For now, I post
                on my{" "}
                <Link href="https://www.twitter.com/TropicsHimself">
                  twitter
                </Link>{" "}
                whenever I'm about to go live.{" "}
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
