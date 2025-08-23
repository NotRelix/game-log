import type { PostType } from "../../types";
import MainPost from "../MainPost/MainPost";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./EditorsPicks.module.css";

interface EditorsPicksProps {
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
  author: "",
};

const EditorsPicks = ({ posts, loading }: EditorsPicksProps) => {
  return (
    <section className={styles.editorsPicksContainer}>
      <div className={styles.editorsTextContainer}>
        <h1>Editor's Picks</h1>
        <p>Our best articles and guides from the best of the best.</p>
      </div>
      <div className={styles.postsContainer}>
        <MainPost post={posts[0]} loading={loading} />
        <div className={styles.morePostsContainer}>
          {posts.length === 0
            ? Array.from({ length: 4 }).map((_, i) => (
                <MiniPost key={i} post={emptyPost} loading={loading} />
              ))
            : posts
                .slice(1)
                .map((post) => (
                  <MiniPost key={post.id} post={post} loading={loading} />
                ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
