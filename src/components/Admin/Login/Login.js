import React from "react";
import styles from "./login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

function Login() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#E8E8E8",
      }}
    >
      <div className={`row ${styles.login}`}>
        <div className="col-lg-7 d-none d-lg-flex p-0 m-0 ">
          <LoginLeft />
        </div>
        <div className="col-lg-5 p-0 m-0">
          <LoginRight />
        </div>
      </div>
    </div>
  );
}

export default Login;

{
  /* <div className={`p-0 m-0 ${styles.login}`}>
<div className={`row p-0 m-0`} style={{width:"100%", height:"100%"}}>
  <div class="col-lg-7 col-md-6 p-0 m-0"> 
  <LoginLeft/>
</div>
<div class="col-lg-5 col-md-6 p-0 m-0">
<LoginRight/>
</div>
</div>
</div> */
}
