import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function LiveStream() {
  return (
    <>
      <Head>
        <title>Tropics || Projects</title>
        <link rel="icon" href="/logoIcon.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.info}>
            <div className={styles.about}>
              <h2>Training Control</h2>
              <figure className={styles.figure}>
                <Image
                  src="/images/training-control.png"
                  width={1280}
                  height={720}
                  alt="training control dashboard"
                />
              </figure>
              <ul className={styles.tech}>
                <h3>Technologies Used</h3>
                <main>
                  <li>React w/Redux</li>
                  <li>Node w/Express</li>
                  <li>Postgres</li>
                  <li>Semantic UI</li>
                </main>
              </ul>
              <p>
                Training Control is an application meant to help jiu jitsu gym
                owners manage students, events, and items in their gym. As my
                final project in college, I had to build both the front-end and
                the back-end from the ground up. It was as challenging as it was
                fun to make. First I made the front-end with React. This was
                also my first attempt at using a css framework. I usually reach
                for vanilla CSS, but I figured I'd give Semantic UI a try. After
                the interface was set up, I used Express and Sequelize to create
                an api for the appliation. My biggest hurdle was trying to
                manage state and data from the api with Redux, but I had a good
                time figuring most of it out and applying it to the project.
                There are a couple bugs{" "}
                <strong>(ex. don't try the delete buttons)</strong>, but I'm
                happy with how it turned out, and I'll keep tweaking it in the
                future.
              </p>
              <footer>
                <a
                  href="https://trainingcontrol-staging.herokuapp.com"
                  target="_blank"
                >
                  Try Online
                </a>
              </footer>
            </div>
            <div className={styles.about}>
              <h2>Quizzes of Runterra</h2>
              <figure className={styles.figure}>
                <Image
                  src="/images/quizzes-of-runeterra.png"
                  width={1280}
                  height={720}
                  alt="training control dashboard"
                />
              </figure>
              <ul className={styles.tech}>
                <h3>Technologies Used</h3>
                <main>
                  <li>EJS (first version)</li>
                  <li>React (second version)</li>
                  <li>Node w/Express</li>
                  <li>Postgres</li>
                </main>
              </ul>
              <p>
                Quizzes of Runeterra is a project that I made during a class on
                NodeJS and Sequelize. This is when I first started learning Node
                and back-end development. You can create and edit any quiz you
                want, but I named it after the world of Runeterra from League of
                Legends, one of my favorite games. Most of the focus was on the
                back-end, but the front-end was made with EJS. I also had to
                make a version with React to pactice consuming the data from the
                api that I had made.
              </p>
            </div>
            <div className={styles.about}>
              <h2>Find Me Amiibo</h2>
              <figure className={styles.figure}>
                <Image
                  src="/images/find-me-amiibo.png"
                  width={1280}
                  height={720}
                  alt="training control dashboard"
                />
              </figure>
              <ul className={styles.tech}>
                <h3>Technologies Used</h3>
                <main>
                  <li>Vue</li>
                  <li>Amiibo Api</li>
                </main>
              </ul>
              <p>
                I made Find Me Amiibo during a portfolio class in college. It's
                a small application that let's you search for amiibo based on
                the name of a character. The only requirements were that it had
                to both use a front-end framework, and make use of an api. Since
                we mostly use React in my college classes, I figured I'd give
                Vue a go and see how it compared. While there is no back-end, it
                makes calls to the amiibo api to get the information about the
                amiibo.
              </p>
              <footer>
                <a
                  href="https://tropicsthedev.github.io/FindMeAmiibo"
                  target="_blank"
                >
                  Try Online
                </a>
              </footer>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
