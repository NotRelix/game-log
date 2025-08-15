import type { JSX } from "react";

type ErrorMessageProps = {
  errors: string[];
};

const ErrorMessage = ({ errors }: ErrorMessageProps): JSX.Element => {
  return (
    <div>
      {errors.map((error, index) => (
        <span key={index}>{error}</span>
      ))}
    </div>
  );
};

export default ErrorMessage;
