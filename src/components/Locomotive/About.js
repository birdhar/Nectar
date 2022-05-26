import React, { useState } from "react";
import "./About.css";
import SectionHeader from "./SectionHeader/SectionHeader";
import Caresual from "./components/Caresual";
import sliding from "./Images/sliding.jpg";
import sliding2 from "./Images/sliding2.png";
import sliding3 from "./Images/sliding3.png";

function About() {
  const [open, setOpen] = useState(false);

  const images = [
    { imageurl: "./Images/datingNew/sliding.jpg" },
    { imageurl: "./Images/datingNew/sliding2.png" },
    { imageurl: "./Images/datingNew/sliding3.png" },
    { imageurl: "./Images/datingNew/sliding4.png" },
  ];
  return (
    <section className="about-section" data-scroll-section>
      <div className="aboutleft">
        <div className="mockup">
          <div
            className="d-flex justify-content-between mt-2  w-100 px-4"
            style={{ height: "35px" }}
          >
            <p style={{ fontSize: "5px" }}>9:18</p>
            <div className="d-flex gap-2">
              <img src="/images/datingNew/signal.png" />
              <img src="/images/datingNew/wifi.png" />
              <img src="/images/datingNew/battery.png" />
            </div>
          </div>
          <div
            className="sliding"
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
      <div className="aboutright">
        <SectionHeader title="About" />
        <p>
          Relationships are an important part of a healthy life. We help you to
          discover a space where you can explore your identity and connect with
          like minded people.
        </p>
      </div>
    </section>
  );
}

export default About;
