import React from "react";
import styles from "./NewSection2.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { style } from "@mui/system";

function NewSection2() {
  return (
    <div>
      <div style={{ height: "3rem", width: "100%" }}></div>
      <div className="mt-5 d-flex justify-content-center w-100">
        <div className={styles.innser}>
          <div>
            <div
              className="w-100 w-md-6 px-4 mx-auto mt-3 "
              data-aos="zoom-in-right"
            >
              <div style={{ width: "fit-content", marginTop: "4rem" }}>
                <div
                  style={{
                    height: "3.5rem",
                    display: "grid",
                    placeItems: "center",
                    width: "3.5rem",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    boxShadow:
                      "0 0 #000, 0 0 rgba(0, 0, 0, 0), 0 0 #000, 0 0 rgba(0, 0, 0, 0)",
                  }}
                >
                  <img
                    style={{ height: "40%", width: "40%" }}
                    src="/images/dating/star.png"
                    alt=""
                  />
                </div>

                <h4 className="mt-3">Love Can Happen Anywhere!</h4>
                <p
                  style={{
                    color: "#3F3F46",
                    fontSize: "1.2rem",

                    marginTop: "2rem",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptatibus autem maxime expedita aspernatur tempora.
                </p>
                <p
                  style={{
                    color: "#3F3F46",
                    fontSize: "1.2rem",
                    marginTop: "2rem",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptatibus autem maxime expedita aspernatur tempora.
                </p>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "600",
                  }}
                  alt=""
                  href="https"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
          {/* data-aos="zoom-in-right" */}
          <div
            className={`w-full w-md-6 px-4 mx-auto d-flex justify-content-center`}
            data-aos="flip-left"
            id={styles.lvcard}
          >
            <div
              className={styles.blockquoteCard}
              style={{ width: "70%", borderRadius: "7px", marginTop: "4rem" }}
            >
              <img
                style={{ height: "300px", width: "100%" }}
                src="/images/dating/lvcard.jpg"
                alt=""
              />
              <blockquote
                className=" p-8 mb-4"
                style={{ backgroundColor: "rgb(223, 152, 20)" }}
              >
                <h4 className="text-xl font-bold text-white">
                  More Than Meets The Eye
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  I feel like I've mentioned before that I'm a robot and that
                  continues to be true, even to this day.
                </p>
              </blockquote>
            </div>
          </div>
          {/* data-aos-delay="1000"  data-aos-delay="1000" */}
        </div>
      </div>
    </div>
  );
}

export default NewSection2;
