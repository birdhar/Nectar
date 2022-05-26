import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Section2.module.css";
import AOS from "aos";
import Caresual from "./Components/Caresual";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { useState } from "react";
function Section2(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    setOpen(true);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpen(false);
    });
  });

  const images = [
    { imageurl: "./Images/datingNew/sliding.jpg" },
    { imageurl: "./Images/datingNew/sliding2.png" },
    { imageurl: "./Images/datingNew/sliding3.png" },
    { imageurl: "./Images/datingNew/sliding4.png" },
  ];

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  return (
    <>
      <div className={styles.Section2Parent}>
        <div className={styles.Section2}>
          <div className={styles.Section2left}>
            <div className={styles.Section2leftinner}>
              <div className={styles.mockup}>
                <div
                  className="d-flex justify-content-between mt-2  w-100 px-4"
                  style={{ height: "35px" }}
                >
                  <p>9:18</p>
                  <div className="d-flex gap-2">
                    <img src="/images/datingNew/signal.png" />
                    <img src="/images/datingNew/wifi.png" />
                    <img src="/images/datingNew/battery.png" />
                  </div>
                </div>
                <div
                  className={styles.sliding}
                  style={{
                    flex: "1",
                    backgroundColor: "	#E0E0E0",
                    width: "100%",
                  }}
                >
                  <Caresual images={images} />
                </div>
                <div
                  style={{ height: "60px", backgroundColor: "" }}
                  className="d-flex justify-content-center align-items-center "
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: "	#E0E0E0",
                      borderRadius: "50%",
                      border: "1px solid grey",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Section2right}>
            <div className={styles.Section2rightinner}>
              <h3 className={styles.show}>FIND</h3>
              <h3
                data-text="YOUR MATCH..."
                className={`${styles.heading} ${styles.show}`}
              >
                YOUR MATCH...
              </h3>

              <h3
                data-text=" FIND YOUR MATCH..."
                className={`${styles.heading} ${styles.hide}`}
              >
                FIND YOUR MATCH...
              </h3>

              <p>
                We have a special place in our hearts for all of you. We help
                you in making the right choice that may spark interest in both
                you and your desired partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;

{
  /* <div>
              <img
                data-aos="zoom-in"
                className={styles.img1}
                style={{
                  width: "300px",
                  height: "360px",
                  position: "absolute",
                }}
                src="/images/datingNew/mockup.jpg"
              />
            </div>
            <div>
              <img
                data-aos="zoom-in"
                className={styles.img2}
                style={{
                  width: "300px",
                  height: "360px",
                  position: "absolute",
                }}
                src="/images/datingNew/smiling.jpg"
              />
            </div>
            <div>
              <img
                data-aos="zoom-in"
                className={styles.img3}
                style={{
                  width: "300px",
                  height: "360px",
                  position: "absolute",
                }}
                src="/images/datingNew/smiling2.jpg"
              />
            </div>
            <div>
              <img
                data-aos="zoom-in"
                className={styles.img4}
                style={{
                  width: "300px",
                  height: "360px",
                  position: "absolute",
                }}
                src="/images/datingNew/couples.jpg"
              />
            </div>
            <div
              data-aos-duration="3000"
              className={styles.img5}
              style={{ position: "absolute" }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              >
                <img
                  style={{ height: "40%", width: "40%" }}
                  src="/images/datingNew/close.png"
                />
              </div>

              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              >
                <img src="/images/datingNew/love.png" />
              </div>

              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              >
                <img src="/images/datingNew/chat.png" />
              </div>
            </div> */
}
