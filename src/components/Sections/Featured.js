import React from "react";
import "./Featured.css";

function Featured(props) {
  // document.addEventListener("mousedown", () => {
  //   props.setVisibleElement(false);
  //   props.closePopup(false);
  // });

  console.log(props);
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <div></div>
        <img src="/images/locomotive/couples2.jpg" />
      </div>
      <div className="featured-column-layout">
        <div></div>
        <img src="/images/locomotive/couples3.jpg" />
      </div>
    </section>
  );
}

export default Featured;
