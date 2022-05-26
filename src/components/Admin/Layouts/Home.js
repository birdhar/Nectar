import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Main from "./Main";

const Home = ({ children, dispatch, componentReducer }) => {
 
  return (
    <div className="row p-0 m-0">
      <div
        className="col-1 col-lg-2 p-0 m-0"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <LeftSide dispatch={dispatch} componentReducer={componentReducer} />
      </div>
      <div className="col-11 col-lg-7 p-0 m-0">
        <Main children={children} />
      </div>
      <div
        className="d-none d-lg-flex col-lg-3"
        style={{ backgroundColor: "#e5f9f8" }}
      >
        <RightSide componentReducer={componentReducer} />
      </div>
    </div>
  );
};

export default Home;
