import type { PostType } from "../../types";
import styles from "./MainPost.module.css";

interface MainPostProps {
  post: PostType;
}

const MainPost = ({ post }: MainPostProps) => {
  console.log(post);
  return (
    <div>
      <div className={styles.imageContainer}>
        {post.headerImgPath ? (
          <img src={post.headerImgPath} alt="" />
        ) : (
          <img alt="" />
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
