import React from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Gallery.css";
import scroll from "./Images/scroll.jpg";
import scroll2 from "./Images/scroll2.jpg";
import scroll3 from "./Images/scroll3.jpg";
import scroll4 from "./Images/scroll4.jpg";

const img = [scroll, scroll2];

const images = [
  {
    // src: "./Images/scroll.jpg",
    src: scroll,
    title: "Love in the air",
    subtitle: "Meet your loved one",
    category: "Love",
  },
  {
    // src: "./Images/scroll2.jpg",
    src: scroll2,
    title: "Love in the air",
    subtitle: "Meet your loved one",
    category: "Love",
  },
  {
    // src: "./Images/scroll3.jpg",
    src: scroll3,
    title: "Love in the air",
    subtitle: "Meet your loved one",
    category: "Love",
  },
  {
    // src: "./Images/scroll4.jpg",
    src: scroll4,
    title: "Love in the air",
    subtitle: "Meet your loved one",
    category: "Love",
  },
];

const GallaryItem = ({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) => {
  return (
    <>
      <div className="gallary-item-wrapper" data-scroll-section>
        <div className="hide" />
        <div className="gallary-item">
          {/* <div className="gallary-item-info">
            <h1 className="gallary-info-title">{title}</h1>
            <h6 className="gallary-info-subtitle">{subtitle}</h6>
            <p className="gallary-info-category">{category}</p>
          </div> */}
          <div
            className="gallary-item-image"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
        <div className="hide" />
      </div>
    </>
  );
};

function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  // gsap.registerPlugin(ScrollTrigger);

  // let sections = gsap.utils.toArray(".panel");

  // gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".container",
  //     pin: true,
  //     scrub: 1,
  //     snap: 1 / (sections.length - 1),
  //     // base vertical scrolling on how wide the container is so it feels more natural.
  //     end: "+=3500",
  //   },
  // });

  return (
    <section className="section-wrapper gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter">
          {/* <span>{activeImage}</span>
          <span className="divider"></span>
          <span>{images.length}</span> */}
        </div>

        {images.map((image, index) => (
          <GallaryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

{
  /* <>
<div class="container">
  <section class="section one">
    <h3>ONE</h3>
    <img src={scroll} />
  </section>
  <section class="section two">
    <h3>TWO</h3>
    <img src={scroll2} />
  </section>
  <section class="section three">
    <h3>THREE</h3>
    <img src={scroll3} />
  </section>
</div>
</> */
}
