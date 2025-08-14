import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const result = await response.json();
      setPosts(result);
    };

    fetchPost();
  }, []);
  console.log(posts);
  return <div>Posts</div>;
};

export default Posts;
