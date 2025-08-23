import { useContext } from "react";
import styles from "./Post.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import ScrollToTop from "../../components/ScrollToTop";
import Comments from "../../components/Comments/Comments";

const PostLoading = () => {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Post must be used inside a DarkModeProvider");
  const { darkMode } = context;

  return (
    <section
      className={`${styles.postContainer} ${darkMode ? styles.dark : ""}`}
    >
      <ScrollToTop />
      <div className={styles.postContent}>
        <div className={styles.imageContainer}>
          <div className={`${styles.imageHeader} ${styles.skeleton}`}></div>
        </div>
        <div className={styles.contentContainer}>
          <h1
            className={`${styles.skeleton} ${styles.skeletonHeaderText}`}
          ></h1>
          <h1
            className={`${styles.skeleton} ${styles.skeletonHeaderTextLast} ${styles.skeletonHeaderReset}`}
          ></h1>
          <div className={styles.profileContainer}>
            <span
              className={`${styles.profilePicture} ${styles.skeleton}`}
            ></span>
            <div
              className={`${styles.skeletonTextVeryShort} ${styles.skeleton} ${styles.skeletonText}`}
            ></div>
            <div
              className={`${styles.skeletonTextShort} ${styles.skeleton}`}
            ></div>
          </div>
          <div className={styles.bodyContainer}></div>
          <Comments postId={-1} />
        </div>
      </div>
    </section>
  );
};

export default PostLoading;
