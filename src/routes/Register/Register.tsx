import { useContext, useState, type FormEvent } from "react";
import styles from "./Register.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-router";
import type { RegisterType } from "../../types";
import { MessageContext } from "../../context/MessageContext";

const emptyRegister: RegisterType = {
  username: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { setErrors, setSuccess } = useContext(MessageContext)!;
  const [data, setData] = useState<RegisterType>(emptyRegister);
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Register must be used inside a DarkModeProvider");
  const { darkMode } = context;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setSuccess([]);

    try {
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
        setData(emptyRegister);
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
        <p>
          Don't have an account yet?{" "}
          <Link className={styles.redirect} to={"/login"}>
            Login
          </Link>
        </p>
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
            value={data.username || ""}
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
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
            value={data.password}
            onChange={(e) => {
              setData((prev) => ({ ...prev, password: e.target.value }));
            }}
            required
          />
          <label className={styles.label} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={styles.input}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Enter Password Again"
            value={data.confirmPassword}
            onChange={(e) => {
              setData((prev) => ({ ...prev, confirmPassword: e.target.value }));
            }}
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
