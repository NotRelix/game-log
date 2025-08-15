import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import styles from "./Footer.module.css";

const Footer = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Footer must be used inside a DarkModeProvider");
  const { darkMode } = context;
  return (
    <footer className={`${styles.footer} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.leftContainer}>
        <h1>Game Log</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo
          quis non quaerat, ex explicabo, nam consequuntur veniam enim soluta,
          perferendis debitis error fugiat recusandae rerum inventore aliquam
          dicta molestiae.
        </p>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.usefulLinks}>
          <h1>Useful Links</h1>
          <ul className={styles.ul}>
            <li>Home</li>
            <li>Blogs</li>
            <li>Frontend Repo</li>
            <li>Authors Repo</li>
            <li>Backend Repo</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <ul className={styles.ul}>
            <li>Email</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
