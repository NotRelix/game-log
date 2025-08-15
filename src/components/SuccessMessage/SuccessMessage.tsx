import type { JSX } from "react";

type SuccessMessageProps = {
  success: string[];
};

const SuccessMessage = ({ success }: SuccessMessageProps): JSX.Element => {
  return (
    <div>
      {success.map((msg, index) => (
        <span key={index}>{msg}</span>
      ))}
    </div>
  );
};

export default SuccessMessage;
