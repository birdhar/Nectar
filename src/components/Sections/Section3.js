import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Section3.module.css";
import AOS from "aos";
import { useState } from "react";

function Section3(props) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  document.addEventListener("mousedown", () => {
    props.setVisibleElement(false);
    props.closePopup(false);
  });

  return (
    <div className={styles.section3continer}>
      <div className={styles.section3}>
        <div className={styles.section3left}>
          <div className={styles.section3leftinner} data-aos="fade-right">
            <div className="d-flex justify-content-start w-100">
              <h5>About Us</h5>
            </div>
            <p>
              Relationships are an important part of a healthy life. We help you
              to discover a space where you can explore your identity and
              connect with like minded people.
            </p>
          </div>
        </div>
        <div className={styles.section3right}>
          <div className={styles.section3rightinner} data-aos="fade-left">
            <img className="h-100 w-100" src="/images/dating/bg.jpg" />
          </div>
        </div>
      </div>

      {props.open && (
        <div className={`${styles.popupbg}`}>
          <div className={styles.popup}>
            <h4>Don’t just swipe on photos</h4>
            <h6>Nectar birds and bees, the instant way to meet people</h6>

            <div className="d-flex justify-content-center gap-3 mt-5">
              <img
                style={{ height: "40%" }}
                src="/images/datingNew/apple.png"
              />
              <img style={{ height: "40%" }} src="/images/datingNew/play.png" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section3;
