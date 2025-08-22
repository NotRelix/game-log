import { useContext } from "react";
import styles from "./Home.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-router";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Home must be used inside a DarkModeProvider");
  const { darkMode } = context;
  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <ScrollToTop />
      <div className={styles.content}>
        <h1>Hear Stories <span className={styles.supportingText}>from the</span> <br /> <span className={styles.virtualWorld}>Virtual World</span></h1>
        <Link to={"/posts"} className={styles.startReading}>Start Reading</Link>
      </div>
    </div>
  );
};

export default Home;
