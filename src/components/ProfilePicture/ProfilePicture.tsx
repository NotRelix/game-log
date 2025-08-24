import { User } from "lucide-react";
import styles from "./ProfilePicture.module.css";

interface ProfilePictureProps {
  username: string | undefined;
}

const ProfilePicture = ({ username }: ProfilePictureProps) => {
  if (!username) {
    return (
      <div className={`${styles.profileIcon} ${styles.noUser}`}>
        <User />
      </div>
    );
  }
  return (
    <div className={styles.profileIcon}>
      <span>{username[0].toUpperCase()}</span>
    </div>
  );
};

export default ProfilePicture;
