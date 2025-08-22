import type { EditorsPostsType } from "../../types";
import styles from "./MainPost.module.css";

interface MainPostProps {
  post: EditorsPostsType;
}

const MainPost = ({ post }: MainPostProps) => {
  console.log(post);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainImageContainer}>
        {post.headerImgPath ? (
          <img className={styles.mainImage} src={post.headerImgPath} alt="" />
        ) : (
          // <img className={styles.mainImage} alt="" />
          <img
            className={styles.mainImage}
            src="https://agboqazmkzeqhsmohidi.supabase.co/storage/v1/object/public/uploads/1755702589443-Screenshot_2025-08-20_at_1.55.33_PM.png"
            alt=""
          />
        )}
      </div>
      <div className={styles.mainTextContainer}>
        <h1>{post.title}</h1>
        <span>By: {post.author}</span>
      </div>
    </div>
  );
};

export default MainPost;
