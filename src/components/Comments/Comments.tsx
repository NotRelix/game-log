import { useEffect, useState, type FormEvent, type JSX } from "react";
import type { CommentType } from "../../types";

type CommentsProps = {
  postId: number;
};

const Comments = ({ postId }: CommentsProps): JSX.Element => {
  const [comments, setComments] = useState<CommentType[] | null>(null);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `http://localhost:3000/posts/${postId}/comments`
      );
      const result = await response.json();
      setComments(result.comments);
      console.log(result);
    };

    fetchComments();
  }, [postId]);

  const handlePostComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      comment: formData.get("comment") || "",
    };
    const token = localStorage.getItem("token") || "";
    console.log(token);
    const response = await fetch(
      `http://localhost:3000/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    setComments((prev) =>
      prev ? [result.comment, ...prev] : [result.comment]
    );
    console.log(result);
  };

  if (!comments) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Comments Section:</h1>
      <form onSubmit={handlePostComment}>
        <label htmlFor="comment">Comment</label>
        <input type="text" id="comment" name="comment" />
        <button type="submit">Post</button>
      </form>
      {comments.map((comment) => (
        <span key={comment.id}>
          {comment.comment} {new Date(comment.createdAt).toLocaleString()}
        </span>
      ))}
    </div>
  );
};

export default Comments;
