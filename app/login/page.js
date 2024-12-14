import Nav from "../components/Nav/Nav";
import Button from "../components/UI/Button/Button";
import Link from "next/link";
import styles from "./Login.module.scss"; // Create a separate module for Login styles

const Login = () => {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2 className={styles.header}>Log In</h2>
            <form action="" method="post" className={styles.form}>
              <div className={styles.form__control}>
                <label htmlFor="email" className={styles.form__label}>Email: *</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className={styles.form__input}
                />
              </div>
              <div className={styles.form__control}>
                <label htmlFor="password" className={styles.form__label}>Password: *</label>
                <input
                  type="password" // Change to password type for security
                  name="password"
                  id=""
                  className={styles.form__input}
                />
              </div>
              <p className={styles.paragraph}>Don't have an account? <Link href="/signup">Sign Up</Link></p>
              <Button variant="login--reverse" text="Log In" />

              <div className={styles.orDivider}>
                <hr className={styles.line} />
                <span className={styles.text}>Or</span>
                <hr className={styles.line} />
              </div>

              <Button variant="google-signup" text="Log In with Google" icon="google" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;