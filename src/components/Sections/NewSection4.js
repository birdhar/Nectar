import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewSection4.module.css";

export default function NewSection4() {
  return (
    <div
      className={styles.NewSection4}
      style={{ backgroundColor: "#27272A", color: "white", paddingTop: "3rem" }}
    >
      <div className={styles.firstrow}>
        <div>
          <h3>Connect with people </h3>
          <p style={{ color: "grey" }}>
            Because there’s more to life than just dating apps. Be someone’s
            woobie and find love ASAP
          </p>
        </div>
      </div>

      <div className={styles.secondRow}>
        <div
          className={`d-flex flex-column align-items-center ${styles.secondRowinner}`}
          data-aos="fade-in"
          data-aos-delay="600"
        >
          <div
            style={{
              width: "2.6rem",
              height: "2.6rem",
              backgroundColor: "#FFF",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              boxShadow:
                "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
            }}
          >
            <img
              style={{ height: "50%", width: "50%" }}
              src="/images/dating/club.png"
            />
          </div>
          <h4>Excelent Services</h4>
          <p>
            You’re about to have the best online dating experience — all you
            need are some good pics and a solid bio to stand out.
          </p>
        </div>

        <div
          className={`d-flex flex-column align-items-center ${styles.secondRowinner}`}
          data-aos="fade-in"
          data-aos-delay="400"
        >
          <div
            style={{
              width: "2.6rem",
              height: "2.6rem",
              backgroundColor: "#FFF",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              boxShadow:
                "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
            }}
          >
            <img
              style={{ height: "50%", width: "50%" }}
              src="/images/dating/bday.png"
            />
          </div>
          <h4>Say More Than Hey</h4>
          <p>
            See your matches with ease. And when you’re at a loss for words,
            react with GIFs and emojis.
          </p>
        </div>
        <div
          className={`d-flex flex-column align-items-center ${styles.secondRowinner}`}
        >
          <div
            style={{
              width: "2.6rem",
              height: "2.6rem",
              backgroundColor: "#FFF",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              boxShadow:
                "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
            }}
          >
            <img
              style={{ height: "50%", width: "50%" }}
              src="/images/dating/ballon.png"
            />
          </div>
          <h4>Meet someone who’s right for you.</h4>
          <p>
            Go beyond your social circle and connect with people near and far.
          </p>
        </div>
      </div>
    </div>
  );
}
