import { useContext } from "react";
import styles from "./MainPost.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const MainPostLoading = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("MainPostLoading must be used inside a DarkModeProvider");
  const { darkMode } = context;

  return (
    <div className={`${styles.mainContainer} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.mainImageContainer}>
        <div className={`${styles.mainImage} ${styles.skeleton}`}></div>
      </div>
      <div className={styles.mainTextContainer}>
        <div
          className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonHeaderText}`}
        ></div>
        <div className={styles.profileContainer}>
          <div className={`${styles.profileIcon} ${styles.skeleton}`}></div>
          <div
            className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextShort}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainPostLoading;
