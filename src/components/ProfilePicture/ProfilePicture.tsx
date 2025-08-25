import { User } from "lucide-react";
import styles from "./ProfilePicture.module.css";

interface ProfilePictureProps {
  username: string | undefined;
  userId: number | null | undefined;
}

const ProfilePicture = ({ username, userId }: ProfilePictureProps) => {
  if (!username) {
    return (
      <div className={`${styles.profileIcon} ${styles.noUser}`}>
        <User />
      </div>
    );
  }
  const userNumber = userId ? ((userId - 1) % 7) + 1 : 0;
  return (
    <div
      className={styles.profileIcon}
      style={{ backgroundColor: `var(--avatar-bg-${userNumber})` }}
    >
      <span>{username[0].toUpperCase()}</span>
    </div>
  );
};

export default ProfilePicture;
