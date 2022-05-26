import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Verified.css";

const Verified = () => {
  const percentage = 66;
  return (
    <div
      className="d-flex justify-content-center"
      style={{ paddingTop: "1rem" }}
    >
      <CircularProgressbar
        strokeWidth={5}
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#e96dd5",
          pathColor: "#e96dd5",
          trailColor: "#bfbbbb",
        })}
      />
    </div>
  );
};

export default Verified;
