import React, { useState } from "react";
import Navbar from "./Locomotive/Navbar";
import Header from "./Locomotive/Header";
import Featured from "./Locomotive/Featured";
import About from "./Locomotive/About";
import Gallery from "./Locomotive/Gallery";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Footer from "./Locomotive/Footer";
import "./Home.css";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useRef } from "react";
import { useEffect } from "react";
import useScroll from "./Locomotive/hooks/useScroll";
import Section1 from "./Locomotive/Section1";
import Features from "./Locomotive/Section4";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, Power2 } from "gsap/gsap-core";
import { Timer10 } from "@mui/icons-material";

function Home() {
  const dataRef = useRef(null);
  const [visibleElement, setVisibleElement] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  // const [timer, setTimer] = useState(3);
  const [home, setHome] = useState("");
  const [about, setAbout] = useState("");
  const [features, setFeatures] = useState("");
  const [contact, setContact] = useState("");

  let imageReveal = CSSRulePlugin.getRule(".img-container::after");

  const tl = gsap.timeline();

  // useScroll(!loading);

  // const ref = useRef(null);
  let imgContainerRef = useRef(null);
  let imgRef = useRef(null);
  const containerRef = useRef();

  // const clear = () => {
  //   window.clearInterval(ref.current);
  //   setLoading(false);
  // };

  useEffect(() => {
    setLoading(true);
    (async () => {
      window.setTimeout(() => {
        setLoading(false);
      }, 5000);
    })();
  }, []);

  // useEffect(() => {
  //   ref.current = window.setInterval(() => {
  //     setTimer((timer) => timer - 1);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // }, [timer]);

  useEffect(() => {
    tl.to(imgContainerRef, 1, { css: { visibility: "visible" } }).to(
      imageReveal,
      0.5,
      { width: "0", ease: Power2.easeInOut }
    );
  }, [imageReveal, tl]);

  // -----------------------------------

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibleElement(entry.isIntersecting);
      console.log(entry.isIntersecting);
    });
    observer.observe(dataRef.current);
  }, []);

  if (visibleElement) {
    setTimeout(() => {
      setOpen(true);
    }, 400);
  }

  visibleElement ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div style={{ cursor: "none" }}>
          <CustomCursor
            customClass="custom-cursor"
            dimensions={30}
            fill="#000"
            smoothness={{
              movement: 0.2,
              scale: 0.1,
              opacity: 0.2,
            }}
            strokeColor="#fff"
            strokeWidth="1px"
          />
          {/* {console.log(loading)} */}
          {loading ? (
            <div
              className="loader-wrapper fixed"
              ref={(el) => (imgContainerRef = el)}
            >
              <div className="img-container">
                <img
                  src="/images/locomotive/logo.png"
                  ref={(el) => (imgRef = el)}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <>
              <div id={home}>
                <Section1
                  features={(w) => setFeatures(w)}
                  home={(w) => setHome(w)}
                  about={(w) => setAbout(w)}
                  contact={(w) => setContact(w)}
                  open={open}
                  closePopup={(w) => setOpen(w)}
                  setVisibleElement={setVisibleElement}
                />
              </div>
              <div
                className="main-container"
                id="main-container"
                data-scroll-container
              >
                <div>
                  <Featured
                    open={open}
                    closePopup={(w) => setOpen(w)}
                    setVisibleElement={setVisibleElement}
                  />
                </div>
                <div id={about}>
                  <About />
                </div>

                <div id="gallery">
                  <Gallery />
                </div>
                <div id={features} ref={dataRef}>
                  <Features
                    open={open}
                    closePopup={(w) => setOpen(w)}
                    setVisibleElement={setVisibleElement}
                  />
                </div>
              </div>
              <div id={contact}>
                <Footer />
              </div>
            </>
          )}
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default Home;
