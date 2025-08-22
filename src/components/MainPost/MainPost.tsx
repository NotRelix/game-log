import { useContext } from "react";
import type { EditorsPostsType } from "../../types";
import styles from "./MainPost.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

interface MainPostProps {
  post: EditorsPostsType;
  loading: boolean;
}

const MainPost = ({ post, loading }: MainPostProps) => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Register must be used inside a DarkModeProvider");
  const { darkMode } = context;

  if (loading) {
    return (
      <div className={`${styles.mainContainer} ${darkMode ? styles.dark : ""}`}>
        <div className={styles.mainImageContainer}>
          <div className={`${styles.mainImage} ${styles.skeleton}`}></div>
        </div>
        <div className={styles.mainTextContainer}>
          <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
          <div className={styles.profileContainer}>
            <div className={`${styles.profileIcon} ${styles.skeleton}`}></div>
            <div
              className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextShort}`}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.mainContainer} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.mainImageContainer}>
        {post.headerImgPath ? (
          <img className={styles.mainImage} src={post.headerImgPath} alt="" />
        ) : (
          <img
            className={styles.mainImage}
            src="https://agboqazmkzeqhsmohidi.supabase.co/storage/v1/object/public/uploads/1755702589443-Screenshot_2025-08-20_at_1.55.33_PM.png"
            alt=""
          />
        )}
      </div>
      <div className={styles.mainTextContainer}>
        <h1>{post.title}</h1>
        <div className={styles.profileContainer}>
          <div className={styles.profileIcon}>
            <span>{post.author[0].toUpperCase()}</span>
          </div>
          <span>{post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
