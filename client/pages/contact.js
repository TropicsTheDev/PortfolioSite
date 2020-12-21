import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
import API from "../utils/API";

export default function Contact() {
  const [state, setState] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message, spam } = state;
    const isError = [name, email, subject, message].filter(
      (field) => field == undefined || field == ""
    );
    const error = "Please fill out all fields before submitting";
    // dont continue if fields are blank
    if (isError.length > 0) return setState({ ...state, error });
    setState({ ...state, error: null });
    try {
      const response = await API.post("/email", {
        name,
        email,
        subject,
        message,
        spam,
      });
      const { success, msg } = response;
      console.log(response);
      setState({ ...state, success, msg, error: null });
    } catch (e) {
      console.log(e);
      setState({ ...state, error: "Something went wrong" });
    }
  };

  return (
    <>
      <Head>
        <title>Tropics || Contact</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Feel free to reach out to me with an email so that we can get in touch!"/>
        <meta
          name="keywords"
          content="Tropics Web Application Developer, Tropics Full Stack Developer, Contact Tropics Web Developer, Contact Tropics Web Developer Remote, Tropics Web Developer Orlando, Contact Douglas Web Developer Orlando"
        />
        <meta name="author" content="Tropics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Contact Me</h1>
          <div className={styles.info}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <header>
                <h2>
                  Feel free to send me an email for business inquiries,
                  questions, or even to offer advice!
                </h2>
              </header>
              <fieldset className={styles.fields}>
                <label className={styles.label} htmlFor="name">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleInput}
                    value={state.name}
                    className={styles.input}
                  />
                </label>
                <label className={styles.label} htmlFor="email">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInput}
                    value={state.email}
                    className={styles.input}
                  />
                </label>
                <label className={styles.label} htmlFor="subject">
                  Subject
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={handleInput}
                    value={state.subject}
                    className={styles.input}
                  />
                </label>
                <label className={styles.label} htmlFor="message">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleInput}
                    value={state.message}
                    className={styles.input}
                    rows="5"
                  />
                </label>
                <label
                  className={`${styles.label} ${styles.spam}`}
                  htmlFor="spam"
                >
                  Leave This Blank
                  <input
                    type="text"
                    id="spam"
                    name="spam"
                    onChange={handleInput}
                    value={state.name}
                    className={styles.input}
                  />
                </label>
              </fieldset>
              {state.error != null && (
                <p className={`${styles.alert} ${styles.error}`}>
                  {state.error}
                </p>
              )}
              {state.success == true && (
                <p className={`${styles.alert} ${styles.success}`}>
                  {state.msg}
                </p>
              )}
              <button type="submit" className={styles.button}>
                Send Me a Message
              </button>
            </form>
          </div>
        </main>
      </Layout>
    </>
  );
}
