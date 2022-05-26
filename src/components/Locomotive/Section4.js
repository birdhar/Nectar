import React from "react";
// import styles from "./Section4.module.css";
import "./Section4.css";
import Lottie from "react-lottie";
import chat from "./json/chat.json";
import icebreaker from "./json/icebreaker.json";
import profile from "./json/profile.json";
import videocall from "./json/videocall.json";

function Section4(props) {
  const defaultOptions = [
    {
      loop: true,
      autoplay: true,
      animationData: profile,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: chat,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: icebreaker,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: videocall,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  ];

  document.addEventListener("mousedown", () => {
    props.setVisibleElement(false);
    props.closePopup(false);
  });
  return (
    <div className="pt-5 row pading" data-scroll-section>
      <div className="col-md-4 offset-md-1 col-xs-12">
        <div className="row ">
          <div className="col-12  col-sm-4  d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/harth.png"
              className={styles.image}
              alt=""
            /> */}
            <div className="w-30 h-30 lottie">
              <Lottie
                options={defaultOptions[0]}
                style={{
                  width: "70%",
                  height: "70%",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-8  para">
            <h3> User Profiles</h3>
            <p style={{ textAlign: "justify" }}>
              We help you to make your own profiles more interesting and
              creative in a way that helps your individual personalities shine
              through.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-2 col-xs-12">
        <div className="row ">
          <div className="col-12  col-sm-4 d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/privacy.png"
              className={styles.image}
              alt=""
            /> */}
            <div className="w-30 h-30 lottie2 lottie">
              <Lottie
                options={defaultOptions[1]}
                style={{
                  marginBottom: "15px",
                  marginLeft: "2px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-8 para">
            <h3>Chat and Messaging</h3>
            <p style={{ textAlign: "justify" }}>
              With full-featured chat it will help to build better connections
              between you and your connection, increasing the chance of
              relationships in real life.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-1 col-xs-12">
        <div className="row">
          <div className="col-12  col-sm-4 d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/email.png"
              className={styles.image}
              alt=""
            /> */}
            <div className="w-30 h-30 lottie">
              <Lottie
                options={defaultOptions[2]}
                style={{
                  width: "65%",
                  height: "65%",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-8 para">
            <h3>Ice breakers</h3>
            <p style={{ textAlign: "justify" }}>
              Icebreaker allows you to discover the similarities with your
              match. You’ll have some easy conversation starters to break the
              ice.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-2 col-xs-12">
        <div className="row">
          <div className="col-12  col-sm-4 d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/report.png"
              className={styles.image}
              alt=""
            /> */}
            <div className="w-30 h-30 lottie">
              <Lottie
                options={defaultOptions[3]}
                style={{
                  width: "65%",
                  height: "65%",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-8 para">
            <h3>Voice and Video Calling</h3>
            <p style={{ textAlign: "justify" }}>
              Voice and video calling features, with filters, allows users to
              move beyond text chat into something more personal and intimate.
            </p>
          </div>
        </div>
      </div>

      {props.open && (
        <div className="popupbg">
          <div className="popup">
            <h4>Don’t just swipe on photos</h4>
            <h6>Nectar birds and bees, the instant way to meet people</h6>

            <div className="d-flex justify-content-center gap-3 mt-5">
              <img
                style={{ height: "40%" }}
                src="/images/datingNew/apple.png"
                alt=""
              />
              <img
                alt=" "
                style={{ height: "40%" }}
                src="/images/datingNew/play.png"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section4;
