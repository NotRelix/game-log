import { useContext, useState, type FormEvent } from "react";
import type { CommentType, ReplyType } from "../../types";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import styles from "./Reply.module.css";
import commentStyles from "../Comment/Comment.module.css";
import { useAuth } from "../../hooks/useAuth";
import { PopupContext } from "../../context/PopupContext";
import { SendHorizonal } from "lucide-react";
import { useParams } from "react-router";
import { formatDistanceDate } from "../../utils/dateFormatter";

interface ReplyProps {
  reply: ReplyType;
  setReplies: React.Dispatch<React.SetStateAction<ReplyType[] | null>>;
  comment: CommentType;
}

const Reply = ({ reply, setReplies, comment }: ReplyProps) => {
  const { isAuthenticated, user } = useAuth();
  const popupContext = useContext(PopupContext);
  if (!popupContext) {
    throw new Error("Comment must be used inside a PopupProvider");
  }
  const { setLoginPopupOpen, setIsLoginPopupVisible } = popupContext;
  const [replyInput, setReplyInput] = useState<string>("");
  const [replyInputOpen, setReplyInputOpen] = useState<boolean>(false);
  const [mention, setMention] = useState<string>("");
  const { postId } = useParams();

  const handleReplyClick = () => {
    if (!isAuthenticated) {
      setLoginPopupOpen(true);
      requestAnimationFrame(() => {
        setIsLoginPopupVisible(true);
      });
      return;
    }
    setReplyInputOpen(true);
    setMention(`@${reply.author.username}`);
  };

  const handleCloseInput = () => {
    setReplyInput("");
    setReplyInputOpen(false);
  };

  const handleReplyReply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = {
      comment: `${mention} ${replyInput}`,
    };
    console.log({ data });
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
    console.log(result);
    setReplyInput("");
    setReplyInputOpen(false);
    setReplies((prev) => (prev ? [...prev, result.reply] : [result.reply]));
  };

  return (
    <div className={styles.replyContainer}>
      <ProfilePicture username={reply.author.username} userId={reply.authorId} />
      <div className={styles.replyRightContainer}>
        <span>@{reply.author.username} <span className={commentStyles.estimatedTime}>&#183; {formatDistanceDate(reply.createdAt)}</span></span>
        <span>{reply.comment}</span>
        <div className={commentStyles.commentButtons}>
          {replyInputOpen ? (
            <button className={commentStyles.reply} onClick={handleCloseInput}>
              Close
            </button>
          ) : (
            <button className={commentStyles.reply} onClick={handleReplyClick}>
              Reply
            </button>
          )}
        </div>
        {replyInputOpen && (
          <div>
            <form
              className={commentStyles.commentForm}
              onSubmit={handleReplyReply}
            >
              <ProfilePicture username={user?.username} userId={user?.id} />
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
                className={commentStyles.submitComment}
                type="submit"
                onClick={handleReplyClick}
              >
                <SendHorizonal className={commentStyles.submitIcon} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reply;
