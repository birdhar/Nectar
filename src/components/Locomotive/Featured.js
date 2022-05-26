import React, { useRef } from "react";
import "./Featured.css";

import { useEffect } from "react";
import AOS from "aos";

function Featured(props) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <div></div>

        <img src="/images/locomotive/couples2.jpg" />
        {/* </div> */}
      </div>
      <div className="featured-column-layout">
        <div></div>

        <img src="/images/locomotive/couples3.jpg" />
      </div>
    </section>
  );
}

export default Featured;
