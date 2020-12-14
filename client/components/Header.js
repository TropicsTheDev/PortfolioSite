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
            <Link href="/">Home</Link>
          </li>
          <li className={styles.nav_link}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={styles.nav_link}>
            <Link href="/stream">Live Stream</Link>
          </li>
          <li className={styles.nav_link}>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
