import { useContext } from "react";
import type { CommentType } from "../../types";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import styles from "./Comment.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { PopupContext } from "../../context/PopupContext";
import { useAuth } from "../../hooks/useAuth";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const { isAuthenticated } = useAuth();
  const darkModeContext = useContext(DarkModeContext);
  const popupContext = useContext(PopupContext);
  if (!darkModeContext)
    throw new Error("Comment must be used inside a DarkModeProvider");
  if (!popupContext) {
    throw new Error("Comment must be used inside a PopupProvider");
  }
  const { darkMode } = darkModeContext;
  const { setLoginPopupOpen, setIsLoginPopupVisible } = popupContext;

  const handleReplyClick = () => {
    if (!isAuthenticated) {
      setLoginPopupOpen(true);
      requestAnimationFrame(() => {
        setIsLoginPopupVisible(true);
      });
      return;
    }
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
          <button className={styles.reply} onClick={handleReplyClick}>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
