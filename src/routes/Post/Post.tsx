import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { PostType } from "../../types";
import Comments from "../../components/Comments/Comments";
import ScrollToTop from "../../components/ScrollToTop";

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
    return <div>Error</div>;
  }

  return (
    <div>
      <ScrollToTop />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Comments postId={Number(postId)} />
    </div>
  );
};

export default Post;
