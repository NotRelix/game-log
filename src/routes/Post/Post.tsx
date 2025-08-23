import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { PostType } from "../../types";
import Comments from "../../components/Comments/Comments";
import ScrollToTop from "../../components/ScrollToTop";
import createDOMPurify from "dompurify";
import styles from "./Post.module.css";

const DOMPurify = createDOMPurify();

const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        const result: { post: PostType } = await response.json();
        setPost(result.post);
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.postContainer}>
      <ScrollToTop />
      <div className={styles.postContent}>
        <h1>{post.title}</h1>
        <div
          className={styles.bodyContainer}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }}
        ></div>
        <Comments postId={Number(postId)} />
      </div>
    </section>
  );
};

export default Post;
