import type { PostType } from "../../types";
import styles from "./ProfilePicture.module.css";

interface ProfilePictureProps {
  post: PostType;
}

const ProfilePicture = ({ post }: ProfilePictureProps) => {
  return (
    <div className={styles.profileIcon}>
      <span>{post.author[0].toUpperCase()}</span>
    </div>
  );
};

export default ProfilePicture;
