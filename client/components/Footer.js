import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="https://www.twitter.com/TropicsHimself" target="_blank">
            Twitter <i class="ri-twitter-fill"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/TropicsTheDev" target="_blank">
            Github <i class="ri-github-fill"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
