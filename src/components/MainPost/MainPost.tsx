import type { PostType } from "../../types";
import styles from "./MainPost.module.css";

interface MainPostProps {
  post: PostType;
}

const MainPost = ({ post }: MainPostProps) => {
  console.log(post);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        {post.headerImgPath ? (
          <img className={styles.mainImage} src={post.headerImgPath} alt="" />
        ) : (
          <img className={styles.mainImage} alt="" />
        )}
      </div>
      <div>
        <h1>{post.title}</h1>
        <span>by: {post.authorId}</span>
      </div>
    </div>
  );
};

export default MainPost;
