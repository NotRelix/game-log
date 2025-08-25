import type { CommentType } from "../../types"
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import styles from "./Comment.module.css"

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  console.log(comment);
  return (
    <div className={styles.commentContainer}>
      <ProfilePicture username={comment.author.username} />
      <div className={styles.commentRightContainer}>
        <span>@{comment.author.username}</span>
        <span>{comment.comment}</span>
      </div>
    </div>
  )
}

export default Comment