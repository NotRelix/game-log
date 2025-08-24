import { useEffect, useState, type FormEvent, type JSX } from "react";
import type { CommentsType } from "../../types";
import styles from "./Comments.module.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { useAuth } from "../../hooks/useAuth";

type CommentsProps = {
  postId: number;
};

const Comments = ({ postId }: CommentsProps): JSX.Element => {
  const [comments, setComments] = useState<CommentsType | null>(null);
  const [commentInput, setCommentInput] = useState<string>("");
  const { user } = useAuth();
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
    const data = {
      comment: commentInput,
    };
    const token = localStorage.getItem("token") || "";
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
      prev
        ? {
            ...prev,
            comments: [result.comment, ...prev.comments],
            totalCount: prev.totalCount + 1,
          }
        : { comments: [result.comment], totalCount: 1 }
    );
    setCommentInput("");
    console.log(result);
  };

  if (!comments) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>
        {comments.totalCount}{" "}
        {comments.totalCount === 1 ? "Comment" : "Comments"}
      </h1>
      <form onSubmit={handlePostComment}>
        <ProfilePicture username={user?.username} />
        <input
          type="text"
          id="comment"
          name="comment"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
      <div className={styles.commentsContainer}>
        {comments.comments.map((comment) => (
          <span key={comment.id}>
            {comment.comment} {new Date(comment.createdAt).toLocaleString()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Comments;
