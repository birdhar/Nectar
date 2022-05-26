import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./Header.css";
import gsap from "gsap";
import { Power3 } from "gsap";

function Header() {
  const headerTextRef = useRef(null);

  let t1 = new gsap.timeline({ delay: 0.3 });

  useEffect(() => {
    t1.from(
      ".header-text",
      {
        y: 15,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.5,
      },
      "Start"
    );
  }, []);

  // useEffect(() => {
  //   gsap.to(headerTextRef, {
  //     duration: 1,
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     ease: "power2",
  //   });
  // }, []);
  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <h1 ref={headerTextRef} className="header-text">
        Go On Your First Date
      </h1>
    </section>
  );
}

export default Header;
