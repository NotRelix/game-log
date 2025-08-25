import { useContext, useState } from "react";
import type { CommentType } from "../../types";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import styles from "./Comment.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { PopupContext } from "../../context/PopupContext";
import { useAuth } from "../../hooks/useAuth";
import { SendHorizonal } from "lucide-react";

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

  const handleReplyComment = () => {
      
  }

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
    setReplyInputOpen(false);
  };

  console.log(comment);
  return (
    <div
      className={`${styles.commentContainer} ${darkMode ? styles.dark : ""}`}
    >
      <ProfilePicture username={comment.author.username} />
      <div className={styles.commentRightContainer}>
        <span>@{comment.author.username}</span>
        <span>{comment.comment}</span>
        <div>
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
      </div>
    </div>
  );
};

export default Comment;
