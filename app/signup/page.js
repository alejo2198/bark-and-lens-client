"use client";
import Nav from "../components/Nav/Nav";
import Button from "../components/UI/Button/Button";
import Link from "next/link";
import styles from "./Signup.module.scss";

const SignUp = () => {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2 className={styles.header}>Sign Up</h2>
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
                  type="password"
                  name="password"
                  id=""
                  className={styles.form__input}
                />
              </div>
              <div className={styles.form__control}>
                <label htmlFor="passwordConfirm" className={styles.form__label}>Confirm Password: *</label>
                <input
                  type="text"
                  name="passwordConfirm"
                  id=""
                  className={styles.form__input}
                />
              </div>
              <p className={styles.paragraph}>Already have an account? <Link href="/login">Login</Link></p>
              <Button variant={"signup--reverse"} text={"Sign Up"} />

              <div className={styles.orDivider}>
                <hr className={styles.line} />
                <span className={styles.text}>Or</span>
                <hr className={styles.line} />
              </div>

              <Button variant="google-signup" text="Sign Up with Google" icon="google" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
