import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/UserReducer/userSlice";

interface NavbarProps {
  logUser: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ logUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(deleteUser({}));
  }

  return (
    <div className={styles.navbarContainer}>
      <nav>
        <ul>
          <li>
            <button
              className={styles.registerButton}
              onClick={() => (logUser ? navigate("/") : navigate("/login"))}
            >
              {logUser ? "Account" : "Login"}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/register");
                if (logUser) handleLogout();
              }}
              className={styles.registerButton}
            >
              {logUser ? "Logout" : "Register"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
