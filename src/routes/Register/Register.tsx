import { useState, type FormEvent } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const Register = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string[]>([]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setSuccess([]);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        username: formData.get("username") || "",
        password: formData.get("password") || "",
      };

      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!result.success) {
        setErrors(result.messages);
      } else {
        setSuccess(result.messages);
      }
    } catch (err) {
      setErrors(["Failed to register user"]);
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <ErrorMessage errors={errors} />
      <SuccessMessage success={success} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" type="text" required />
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
