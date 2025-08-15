import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:3000/posts/${postId}`);
      const result = await response.json();
      setPost(result.post);
      console.log(result);
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
