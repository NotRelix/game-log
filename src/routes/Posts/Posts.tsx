import { useEffect, useState } from "react";
import type { PostsType } from "../../types";
import EditorsPicks from "../../components/EditorsPicks/EditorsPicks";
import styles from "./Posts.module.css";

const emptyPosts: PostsType = {
  posts: [],
  editorsPosts: [],
};

const Posts = () => {
  const [posts, setPosts] = useState<PostsType>(emptyPosts);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const result = await response.json();
      setPosts({ posts: result.posts, editorsPosts: result.editorsPosts });
    };

    fetchPost();
  }, []);
  return (
    <div className={styles.postsContainer}>
      {posts.editorsPosts.length > 0 && (
        <EditorsPicks posts={posts.editorsPosts} />
      )}
    </div>
  );
};

export default Posts;
