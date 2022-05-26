import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ServiceCard.module.css";

function ServiceCard({ img, bgcolor, heading, p, dataos, dataaosdelay }) {
  return (
    <div
      className={`px-3 ${styles.ServiceCard}`}
      data-aos={dataos}
      data-aos-delay={dataaosdelay}
    >
      <div
        className={` ${styles.ServiceIcon}`}
        style={{ backgroundColor: bgcolor }}
      >
        <img src={img} />
      </div>
      <h6>{heading}</h6>
      <p style={{ textAlign: "center" }}>{p}</p>
    </div>
  );
}

export default ServiceCard;
