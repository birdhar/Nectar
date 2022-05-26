import React from "react";
import styles from "./login.module.css";

function LoginRight() {
  return (
    <div className={styles.loginRight}>
      <div
        style={{
          width: "8rem",
          height: "8rem",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      ></div>
      <h1 className="mt-3">Login</h1>
      <p>To your JAMES CLUB 248 Admin Panel!</p>

      <form
        // onSubmit={handleSubmit(handleSubmitForm)}
        className={styles.loginform}
      >
        <div className={styles.inputWithIcon}>
          <input type="text" placeholder="Username" />
          <img src="/images/nameIcon.png" alt="not gound" />
        </div>

        <div className={`${styles.inputWithIcon} mt-4`}>
          <input type="password" placeholder="Password" />
          <img src="/images/lock.png" alt="not gound" />
          <img
            className={styles.eyeIcon}
            src="/images/eye.png"
            alt="not gound"
          />
        </div>

        <div className="mt-4 mb-lg-4">
          <button className={`btn btn-md ${styles.notificationButton}`}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginRight;
