import styles from "./style.module.scss";

export const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={styles.inputBox}>
            <label>Password</label>
            <input type="password" />
          </div>
        </form>
      </div>
    </div>
  );
};
