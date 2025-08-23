import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { PostType } from "../../types";
import Comments from "../../components/Comments/Comments";
import ScrollToTop from "../../components/ScrollToTop";
import createDOMPurify from "dompurify";
import styles from "./Post.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const DOMPurify = createDOMPurify();

const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  const headerLink = post?.headerImgPath || "/no-img-placeholder.jpg";
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Post must be used inside a DarkModeProvider");
  const { darkMode } = context;
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
    <section
      className={`${styles.postContainer} ${darkMode ? styles.dark : ""}`}
    >
      <ScrollToTop />
      <div className={styles.postContent}>
        <div className={styles.imageContainer}>
          <img src={headerLink} alt="" />
        </div>
        <div className={styles.contentContainer}>
          <h1 id={styles.postTitle}>{post.title}</h1>
          <div className={styles.profileContainer}>
            <span className={styles.profilePicture}>
              {post.author[0].toUpperCase()}
            </span>
            <span>{post.author}</span>
          </div>
          <div
            className={styles.bodyContainer}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }}
          ></div>
          <Comments postId={Number(postId)} />
        </div>
      </div>
    </section>
  );
};

export default Post;
