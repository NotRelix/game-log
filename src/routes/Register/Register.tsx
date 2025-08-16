import { useContext, useState, type FormEvent } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import styles from "./Register.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const Register = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string[]>([]);
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Register must be used inside a DarkModeProvider");
  const { darkMode } = context;
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
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.registerContainer}>
        <h1 className={styles.header}>Register</h1>
        {errors.length > 0 && <ErrorMessage errors={errors} />}
        {success.length > 0 && <SuccessMessage success={success} />}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
            name="username"
            id="username"
            type="text"
            placeholder="loadingbob1329"
            required
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            name="password"
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
          <button className={styles.submitButton} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
