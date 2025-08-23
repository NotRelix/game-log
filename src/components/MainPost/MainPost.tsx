import { useContext } from "react";
import styles from "./MainPost.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useNavigate } from "react-router";
import type { PostType } from "../../types";
import MainPostLoading from "./MainPostLoading";

interface MainPostProps {
  post: PostType;
  loading: boolean;
}

const MainPost = ({ post, loading }: MainPostProps) => {
  const navigate = useNavigate();
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("MainPost must be used inside a DarkModeProvider");
  const { darkMode } = context;

  const handleClick = () => {
    if (!post.id) return;
    navigate(`/posts/${post.id}`);
  };

  if (loading) {
    return <MainPostLoading />;
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.mainContainer} ${darkMode ? styles.dark : ""}`}
    >
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
