import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav>
        <ul>
          <li>
            <Link className={styles.loginButton} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className={styles.registerButton} to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
