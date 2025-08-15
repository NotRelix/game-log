import { useEffect, useState, type JSX } from "react";
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

  if (!comments) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Comments Section:</h1>
      {comments.map((comment) => (
        <span key={comment.id}>
          {comment.comment} {new Date(comment.createdAt).toLocaleString()}
        </span>
      ))}
    </div>
  );
};

export default Comments;
