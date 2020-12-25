import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Header(props) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQuery);
    };
  }, []);

  const [state, setState] = useState({
    navVisible: false,
    isSmallScreen: false,
  });

  const toggleNav = (event) => {
    setState({ ...state, navVisible: !state.navVisible });
  };

  const handleMediaQuery = (mediaQuery) => {
    if (mediaQuery.matches) {
      setState({ ...state, isSmallScreen: true });
    } else {
      setState({ ...setState, isSmallScreen: false });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/images/mini-logo.png"
          width={75}
          height={75}
          alt="tropics logo"
        />
      </div>
      <CSSTransition
        in={!state.isSmallScreen || state.navVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
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
      </CSSTransition>
      <button className={styles.toggle_nav} onClick={toggleNav}>
        <i className="ri-menu-line"></i>
      </button>
    </header>
  );
}

export default Header;
