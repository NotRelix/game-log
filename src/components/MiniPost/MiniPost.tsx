import type { PostType } from "../../types";
import styles from "./MiniPost.module.css";
import noImgPlaceholder from "../../assets/no-img-placeholder.jpg";

interface MiniPostProps {
  post: PostType;
}

const MiniPost = ({ post }: MiniPostProps) => {
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
