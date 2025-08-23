import { useContext } from "react";
import styles from "./MiniPost.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const MiniPostLoading = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("MiniPostLoading must be used inside a DarkModeProvider");
  const { darkMode } = context;
  return (
    <div className={`${styles.miniContainer} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.miniImageContainer}>
        <div className={`${styles.miniImage} ${styles.skeleton}`}></div>
      </div>
      <div className={`${styles.postText} ${styles.skeletonTextContainer}`}>
        <div
          className={`${styles.postTitle} ${styles.skeleton} ${styles.skeletonText}`}
        ></div>
        <div
          className={`${styles.postTitle} ${styles.skeleton} ${styles.skeletonText}`}
        ></div>
      </div>
    </div>
  );
};

export default MiniPostLoading;
