import type { PostType } from "../../types";
import styles from "./MiniPost.module.css";
import noImgPlaceholder from "../../assets/no-img-placeholder.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

interface MiniPostProps {
  post: PostType;
  loading: boolean;
}

const MiniPost = ({ post, loading }: MiniPostProps) => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("MiniPost must be used inside a DarkModeProvider");
  const { darkMode } = context;

  if (loading) {
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
  }

  return (
    <div className={styles.miniContainer}>
      <div className={styles.miniImageContainer}>
        {post.headerImgPath ? (
          <img className={styles.miniImage} src={post.headerImgPath} alt="" />
        ) : (
          <img className={styles.miniImage} src={noImgPlaceholder} alt="" />
        )}
      </div>
      <div className={styles.postText}>
        <h1 className={styles.postTitle}>{post.title}</h1>
      </div>
    </div>
  );
};

export default MiniPost;
