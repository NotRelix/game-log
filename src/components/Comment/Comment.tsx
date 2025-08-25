import { useContext, useEffect, useState, type FormEvent } from "react";
import { type CommentType, type ReplyType } from "../../types";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import styles from "./Comment.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { PopupContext } from "../../context/PopupContext";
import { useAuth } from "../../hooks/useAuth";
import { SendHorizonal } from "lucide-react";
import { useParams } from "react-router";
import Reply from "../Reply/Reply";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const { isAuthenticated, user } = useAuth();
  const darkModeContext = useContext(DarkModeContext);
  const popupContext = useContext(PopupContext);
  if (!darkModeContext)
    throw new Error("Comment must be used inside a DarkModeProvider");
  if (!popupContext) {
    throw new Error("Comment must be used inside a PopupProvider");
  }
  const { darkMode } = darkModeContext;
  const { setLoginPopupOpen, setIsLoginPopupVisible } = popupContext;
  const [replyInputOpen, setReplyInputOpen] = useState<boolean>(false);
  const [replyInput, setReplyInput] = useState<string>("");
  const [replies, setReplies] = useState<ReplyType[] | null>(null);
  const { postId } = useParams();

  useEffect(() => {
    const fetchReplies = async () => {
      const response = await fetch(
        `http://localhost:3000/posts/${postId}/comments/${comment.id}/replies`
      );
      const result = await response.json();
      setReplies(result.replies);
    };

    fetchReplies();
  }, [postId]);

  const handleReplyComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      comment: replyInput,
    };
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:3000/posts/${postId}/comments/${comment.id}/replies`,
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
    setReplyInput("");
    setReplyInputOpen(false);
    setReplies((prev) => (prev ? [...prev, result.reply] : [result.reply]));

    console.log(result);
  };

  const handleReplyClick = () => {
    if (!isAuthenticated) {
      setLoginPopupOpen(true);
      requestAnimationFrame(() => {
        setIsLoginPopupVisible(true);
      });
      return;
    }
    setReplyInputOpen(true);
  };

  const handleCloseInput = () => {
    setReplyInput("");
    setReplyInputOpen(false);
  };

  return (
    <div
      className={`${styles.commentContainer} ${darkMode ? styles.dark : ""}`}
    >
      <ProfilePicture username={comment.author.username} />
      <div className={styles.commentRightContainer}>
        <span>@{comment.author.username}</span>
        <span>{comment.comment}</span>
        <div className={styles.commentButtons}>
          {replyInputOpen ? (
            <button className={styles.reply} onClick={handleCloseInput}>
              Close
            </button>
          ) : (
            <button className={styles.reply} onClick={handleReplyClick}>
              Reply
            </button>
          )}
        </div>
        {replyInputOpen && (
          <div>
            <form className={styles.commentForm} onSubmit={handleReplyComment}>
              <ProfilePicture username={user?.username} />
              <input
                type="text"
                id="comment"
                name="comment"
                value={replyInput}
                placeholder="Add a comment..."
                onChange={(e) => setReplyInput(e.target.value)}
                required
              />
              <button
                className={styles.submitComment}
                type="submit"
                onClick={handleReplyClick}
              >
                <SendHorizonal className={styles.submitIcon} />
              </button>
            </form>
          </div>
        )}
        {replies && replies.length > 0 && (
          <div className={styles.repliesContainer}>
            {replies?.map((reply) => (
              <Reply reply={reply} setReplies={setReplies} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
