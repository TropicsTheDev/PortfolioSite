import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
function Layout(props) {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
