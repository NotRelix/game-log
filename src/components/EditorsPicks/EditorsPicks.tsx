import type { PostType } from "../../types";
import MainPost from "../MainPost/MainPost";

interface EditorsPicksProps {
  posts: PostType[];
}

const EditorsPicks = ({ posts }: EditorsPicksProps) => {
  return (
    <section>
      <h1>Editor's Picks</h1>
      <p>Our best articles and guides from the best of the best.</p>
      <div>
        <MainPost post={posts[0]} />
      </div>
    </section>
  );
};

export default EditorsPicks;
