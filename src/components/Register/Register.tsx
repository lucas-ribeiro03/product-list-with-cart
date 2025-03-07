import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser, User } from "../../redux/UserReducer/userSlice";
import { useNavigate } from "react-router-dom";

export const Register: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (user.password !== confirmPassword) {
      alert("senhas nao coincidem");
    } else if (user.password.length < 6) {
      alert("password must be greater than 6 ch");
    } else {
      dispatch(
        registerUser({
          id: `${user.name}.${new Date().getTime()}`,
          name: user.name,
          email: user.email,
          password: user.password,
        })
      );

      navigate("/");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleRegister}>
          <div className={styles.inputBox}>
            <label>Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Password</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Confirm password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className={styles.registerButton}>Register</button>
        </form>
      </div>
    </div>
  );
};
