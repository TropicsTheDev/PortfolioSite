import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <>
      <Head>
        <title>Tropics || Contact</title>
        <link rel="icon" href="/logoIcon.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Contact Me</h1>
          <div className={styles.info}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <header>
                <h2>Feel free to send me an email for business inqueries, questions, or even advivce!</h2>
              </header>
              <fieldset className={styles.fields}>
                <label className={styles.label}>
                  Name
                  <input
                    id="name"
                    name="name"
                    onChange={handleInput}
                    value={state.name}
                    className={styles.input}
                  />
                </label>
                <label className={styles.label}>
                  Email
                  <input
                    id="email"
                    name="email"
                    onChange={handleInput}
                    value={state.email}
                    className={styles.input}
                  />
                </label>
                <label className={styles.label}>
                  Subject
                  <input
                    id="subject"
                    name="subject"
                    onChange={handleInput}
                    value={state.subject}
                    className={styles.input}
                  />
                </label>
                <label className={styles.label}>
                  Message
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleInput}
                    value={state.message}
                    className={styles.input}
                  />
                </label>
              </fieldset>
              <button type="submit" className={styles.button}>Send Me a Message</button>
            </form>
          </div>
        </main>
      </Layout>
    </>
  );
}
