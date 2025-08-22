import type { EditorsPostsType } from "../../types";
import MainPost from "../MainPost/MainPost";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./EditorsPicks.module.css";

interface EditorsPicksProps {
  posts: EditorsPostsType[];
  loading: boolean;
}

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
          {posts.slice(1).map((post) => (
            <MiniPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
