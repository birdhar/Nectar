import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewSection3.module.css";

function NewSection3() {
  return (
    <div className={styles.container}>
      <div className={styles.newsection3}>
        <div
          className={`d-flex align-items-center justify-content-center  ${styles.newsection3inner}`}
          data-aos="flip-right"
          data-aos-delay="1000"
        >
          <div className={styles.section3photo}>
            <img
              style={{ borderRadius: "10px", height: "575px" }}
              src="/images/dating/bg.jpg"
            />
          </div>
        </div>

        <div
          className={`d-flex align-items-center justify-content-center ${styles.newsection3inner}  ${styles.newsection3inner2}`}
          data-aos="zoom-in-right"
        >
          <div className={styles.shadowCard}>
            {/* <div
              style={{
                width: "4rem",
                height: "4rem",
                backgroundColor: "#F9A8D4",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                boxShadow:
                  "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
              }}
            >
              <img src="/images/dating/rocket.png" />
            </div> */}
            <h5>Single and here for it</h5>
            <p>Got dating app fatigue?</p>
            <p>
              You're not alone. We've never been more ready for something
              different. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas voluptatibus autem maxime expedita aspernatur tempora.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptatibus autem maxime expedita aspernatur tempora.
            </p>
            <div className="mt-5 d-flex gap-2">
              <div
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
                  backgroundColor: "#F9A8D4",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  boxShadow:
                    "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
                }}
              >
                <img
                  style={{ height: "50%", width: "50%" }}
                  src="/images/dating/fingerprint.png"
                />
              </div>
              <p>Find love faster</p>
            </div>
            <div className="d-flex gap-2">
              <div
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
                  backgroundColor: "#F9A8D4",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  boxShadow:
                    "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
                }}
              >
                <img
                  style={{ height: "50%", width: "50%" }}
                  src="/images/dating/fingerprint.png"
                />
              </div>
              <p>Make dating real again</p>
            </div>
            <div className="d-flex gap-2">
              <div
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
                  backgroundColor: "#F9A8D4",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  boxShadow:
                    "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
                }}
              >
                <img
                  style={{ height: "50%", width: "50%" }}
                  src="/images/dating/fingerprint.png"
                />
              </div>
              <p>Engage your dating life, one swipe at a time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSection3;
