import { useEffect, useState } from "react";
import type { PostsType } from "../../types";
import EditorsPicks from "../../components/EditorsPicks/EditorsPicks";
import styles from "./Posts.module.css";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import ScrollToTop from "../../components/ScrollToTop";

const emptyPosts: PostsType = {
  posts: [],
  editorsPosts: [],
};

const Posts = () => {
  const [posts, setPosts] = useState<PostsType>(emptyPosts);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const result = await response.json();
      setPosts({ posts: result.posts, editorsPosts: result.editorsPosts });
      setLoading(false);
    };

    fetchPost();
  }, []);
  return (
    <div className={styles.postsContainer}>
      <ScrollToTop />
      <EditorsPicks posts={posts.editorsPosts} loading={loading} />
      <LatestPosts posts={posts.posts.slice(0, 6)} loading={loading} />
    </div>
  );
};

export default Posts;
