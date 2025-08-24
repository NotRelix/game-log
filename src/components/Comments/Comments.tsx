import {
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type JSX,
} from "react";
import type { CommentsType } from "../../types";
import styles from "./Comments.module.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { useAuth } from "../../hooks/useAuth";
import { DarkModeContext } from "../../context/DarkModeContext";
import { SendHorizonal } from "lucide-react";

type CommentsProps = {
  postId: number;
};

const Comments = ({ postId }: CommentsProps): JSX.Element => {
  const [comments, setComments] = useState<CommentsType | null>(null);
  const [commentInput, setCommentInput] = useState<string>("");
  const { isAuthenticated, user } = useAuth();
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Comments must be used inside a DarkModeProvider");
  const { darkMode } = context;
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

  const handleCommentClick = () => {
    if (isAuthenticated) return;
    
  }

  if (!comments) {
    return <div>Error</div>;
  }

  return (
    <div
      className={`${styles.commentsEntireContainer} ${
        darkMode ? styles.dark : ""
      }`}
    >
      <h1 className={styles.commentsHeading}>
        {comments.totalCount}{" "}
        {comments.totalCount === 1 ? "Comment" : "Comments"}
      </h1>
      <form className={styles.commentForm} onSubmit={handlePostComment}>
        <ProfilePicture username={user?.username} />
        <input
          type="text"
          id="comment"
          name="comment"
          value={commentInput}
          placeholder="Add a comment..."
          onChange={(e) => setCommentInput(e.target.value)}
          onClick={handleCommentClick}
          readOnly={!isAuthenticated}
          required
        />
        <button className={styles.submitComment} type="submit">
          <SendHorizonal className={styles.submitIcon} />
        </button>
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
