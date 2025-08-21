import type { PostType } from "../../types";
import MainPost from "../MainPost/MainPost";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./EditorsPicks.module.css"

interface EditorsPicksProps {
  posts: PostType[];
}

const EditorsPicks = ({ posts }: EditorsPicksProps) => {
  return (
    <section>
      <h1>Editor's Picks</h1>
      <p>Our best articles and guides from the best of the best.</p>
      <div className={styles.postsContainer}>
        <MainPost post={posts[0]} />
        <div className={styles.morePostsContainer}>
          {posts.slice(1).map((post) => (
            <MiniPost post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
