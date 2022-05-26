import React from "react";
import NewsLetter from "./RightSide/NewsLetter";
import WebEmail from "./RightSide/WebEmail";
import AddCart from "./RightSide/AddCart";
import Notification from "./RightSide/Notification";
const RightSide = ({ componentReducer }) => {
  return (
    <div style={{ marginTop: "35px" }}>
      <div className="row p-lg-0 m-lg-0">
        <div className="col-8">
          <h6 className=" d-flex justify-content-end">Kibriya Zameer</h6>
          <p className=" d-flex justify-content-end">Language</p>
        </div>
        <div className="col-4  d-flex justify-content-end">
          <img src="/images/photo.jpeg" alt="not found" />
        </div>
      </div>
      {componentReducer.val === "plansUsers" ||
      componentReducer.val === "websiteControl" ||
      componentReducer.val === "blog" ? (
        <>
          <NewsLetter />
          <WebEmail />
        </>
      ) : (
        <>
          <Notification />
          <AddCart />
        </>
      )}
    </div>
  );
};

export default RightSide;
