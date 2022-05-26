import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LandingPage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Divider } from "@mui/material";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section3";
import Section3 from "./Sections/Section2";
import Section4 from "./Sections/Section4";
import Footer from "./Sections/Footer";
import Featured from "./Sections/Featured";

function LandingPage() {
  const myRef = useRef();
  const [visibleElement, setVisibleElement] = useState();
  const [open, setOpen] = useState(false);
  const [home, setHome] = useState("");
  const [about, setAbout] = useState("");
  const [features, setFeatures] = useState("");
  const [contact, setContact] = useState("");
  // console.log("visibleElement", visibleElement, open);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibleElement(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  if (visibleElement) {
    setTimeout(() => {
      setOpen(true);
    }, 400);
  }

  visibleElement ? disableBodyScroll(document) : enableBodyScroll(document);

  console.log(open);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div>
      <section id="1" className={styles.Section1}>
        <Section1
          features={(w) => setFeatures(w)}
          home={(w) => setHome(w)}
          about={(w) => setAbout(w)}
          contact={(w) => setContact(w)}
        />
      </section>

      {/* <Featured /> */}

      <section id="2">
        <Section2
          open={open}
          closePopup={(w) => setOpen(w)}
          setVisibleElement={setVisibleElement}
        />
      </section>
      <section id="3" ref={myRef}>
        <Section3 />
      </section>
      <section id={features}>
        <Section4 />
      </section>
      <section style={{ height: "auto" }} id="5">
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
