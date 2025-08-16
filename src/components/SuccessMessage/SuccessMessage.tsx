import { useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import styles from "../ErrorMessage/ErrorMessage.module.css";

type SuccessMessageProps = {
  success: string[];
  darkMode: boolean;
};

const SuccessMessage = ({ success, darkMode }: SuccessMessageProps) => {
  useEffect(() => {
    success.map((msg, index) => {
      setTimeout(() => {
        toast.success(msg, {
          toastId: `success-${msg}`,
          className: darkMode ? styles.errorDark : styles.errorLight,
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }, index * 50);
    });
  }, [success]);

  return null;
};

export default SuccessMessage;
