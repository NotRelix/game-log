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
          <div className={styles.bodyContainer}>
            <h1
              className={`${styles.skeleton} ${styles.skeletonTextShort}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonTextLast}`}></p>

            <h1
              className={`${styles.skeleton} ${styles.skeletonTextHalf}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonTextShort}`}></p>

            <h1
              className={`${styles.skeleton} ${styles.skeletonTextVeryShort}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonTextHalf}`}></p>

            <h1
              className={`${styles.skeleton} ${styles.skeletonTextShort}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p
              className={`${styles.skeleton} ${styles.skeletonTextVeryShort}`}
            ></p>

            <div className={`${styles.skeleton} ${styles.imageContainerBody}`}>
              <div className={`${styles.imageBody}`}></div>
            </div>

            <h1
              className={`${styles.skeleton} ${styles.skeletonTextShort}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonTextLast}`}></p>

            <h1
              className={`${styles.skeleton} ${styles.skeletonTextHalf}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonTextShort}`}></p>

            <h1
              className={`${styles.skeleton} ${styles.skeletonTextVeryShort}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonTextHalf}`}></p>

            <h1
              className={`${styles.skeleton} ${styles.skeletonTextShort}`}
            ></h1>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>
            <p
              className={`${styles.skeleton} ${styles.skeletonTextVeryShort}`}
            ></p>
          </div>

          <Comments postId={-1} />
        </div>
      </div>
    </section>
  );
};

export default PostLoading;
