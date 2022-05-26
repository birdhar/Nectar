import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
// import "../styles/style.css";

export default function useScroll(start) {
  useEffect(() => {
    if (!start) return;
    const scrollEl = document.querySelector("#main-container");

    const scroll = new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
}
