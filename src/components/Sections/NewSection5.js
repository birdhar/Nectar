import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewSection5.module.css";

function NewSection5() {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  return (
    <div className={styles.NewSection5}>
      <div className={styles.NewSection5inner}>
        <div className={`${styles.secondrow}`}>
          <h4>Let's Keep in touch</h4>
          <p>
            Find us on any of these platforms, we respond 1-2 business days.
          </p>
        </div>
        <div className={`d-flex gap-3`}>
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
              src="/images/dating/fb.png"
            />
          </div>

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
              src="/images/dating/twitter.png"
            />
          </div>

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
              src="/images/dating/instagram.png"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <p style={{ fontSize: "15px", color: "#52525B", textAlign: "center" }}>
          Copyright © 2022 Nector Creative Team
        </p>
      </div>

      <div className={styles.slideshow}>
        <div className={styles.slideshowSlider}>
          {colors.map((backgroundColor, index) => (
            <div
              className={styles.slide}
              key={index}
              style={{ backgroundColor }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewSection5;
