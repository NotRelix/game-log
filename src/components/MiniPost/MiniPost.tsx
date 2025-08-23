import type { PostType } from "../../types";
import styles from "./MiniPost.module.css";
import noImgPlaceholder from "/no-img-placeholder.jpg";
import { useNavigate } from "react-router";
import MiniPostLoading from "./MiniPostLoading";

interface MiniPostProps {
  post: PostType;
  loading: boolean;
}

const MiniPost = ({ post, loading }: MiniPostProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!post.id) return;
    navigate(`/posts/${post.id}`);
  };

  if (loading) {
    return <MiniPostLoading />;
  }

  return (
    <div onClick={handleClick} className={styles.miniContainer}>
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
