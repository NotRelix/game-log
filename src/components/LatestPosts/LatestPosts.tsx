import type { PostType } from "../../types";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./LatestPosts.module.css";

interface LatestPostsType {
  posts: PostType[];
  loading: boolean;
}

const emptyPost: PostType = {
  id: -1,
  title: "",
  body: "",
  published: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: -1,
  headerImgPath: "",
};

const LatestPosts = ({ posts, loading }: LatestPostsType) => {
  return (
    <section className={styles.latestPostsContainer}>
      <div className={styles.latestTextContainer}>
        <h1>Latest Posts</h1>
        <p>Check out the most recent posts from your favorite bloggers.</p>
      </div>
      <div className={styles.postsContainer}>
        {posts.length === 0
          ? Array.from({ length: 6 }).map((_, i) => (
              <MiniPost key={i} post={emptyPost} loading={loading} />
            ))
          : posts.map((post) => (
              <MiniPost key={post.id} post={post} loading={loading} />
            ))}
      </div>
    </section>
  );
};

export default LatestPosts;
