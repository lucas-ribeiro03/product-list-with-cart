import styles from "./style.module.scss";
import { RootReducer } from "../../redux/root-reducer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  logUser: () => void;
}

export const Login: React.FC<LoginProps> = ({ logUser }) => {
  const user = useSelector(
    (rootReducer: RootReducer) => rootReducer.UserReducer
  );

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user.user) {
      alert("usuario nao existe");
    } else if (user.user?.password !== loginUser.password) {
      alert("incorrect password");
    } else if (user.user?.email !== loginUser.email) {
      alert("incorrect email");
    } else {
      console.log("concluido");
      navigate("/");
      logUser();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleLogin}>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input
              type="email"
              onChange={(e) =>
                setLoginUser({ ...loginUser, email: e.target.value })
              }
              value={loginUser.email}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) =>
                setLoginUser({ ...loginUser, password: e.target.value })
              }
              value={loginUser.password}
            />
          </div>

          <button className={styles.btnLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};
