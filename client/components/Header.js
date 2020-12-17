import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/Minilogo.png" width="100px" height="100px" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav_links}>
          <li className={styles.nav_link}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.nav_link}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={styles.nav_link}>
            <Link href="/stream">
              <a>Live Stream</a>
            </Link>
          </li>
          <li className={styles.nav_link}>
            <Link href="/contact">
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
