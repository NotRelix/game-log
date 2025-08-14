import type { FormEvent } from "react";

const Register = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {
        username: formData.get("username"),
        password: formData.get("password"),
      };
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log("Failed to register user.", err);
    }
  };
  return (
    <div>
      <h1>Register</h1>
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
