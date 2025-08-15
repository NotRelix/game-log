import { useState, type FormEvent } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const Login = () => {
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

      const response = await fetch("http://localhost:3000/login", {
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
      console.log(result);
    } catch (err) {
      setErrors(["Failed to login user"]);
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errors.length > 0 && <ErrorMessage errors={errors} />}
      {success.length > 0 && <SuccessMessage success={success} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
