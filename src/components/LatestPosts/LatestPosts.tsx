import type { PostType } from "../../types";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./LatestPosts.module.css";

interface LatestPostsType {
  posts: PostType[];
  loading: boolean;
}

const LatestPosts = ({ posts, loading }: LatestPostsType) => {
  return (
    <section className={styles.latestPostsContainer}>
      <div className={styles.latestTextContainer}>
        <h1>Latest Posts</h1>
        <p>Check out the most recent posts from your favorite bloggers.</p>
      </div>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <MiniPost key={post.id} post={post} loading={loading} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
