import { useEffect, type JSX } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface ErrorMessageType {
  errors: string[];
}

const ErrorMessage = ({ errors }: ErrorMessageType): JSX.Element => {
  useEffect(() => {
    errors.map((error, index) => {
      setTimeout(() => {
        toast.error(error, {
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
  }, [errors]);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};

export default ErrorMessage;
