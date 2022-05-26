import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewSection.module.css";
import doll from "./Images/doll.png";
import girl from "./Images/girl.png";
import love from "./Images/love.png";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceCard from "./Components/ServiceCard";

function NewSection1() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div
        className={`position-absolute top-0 w-100 d-flex align-items-center  justify-content-between px-5 py-3`}
        style={{ zIndex: "50" }}
      >
        <a
          className={`d-inline-block mr-4 py-2 text-uppercase  ${styles.navfont}`}
          href="#"
        >
          {/* Nav Title  */}
          <img
            style={{ width: "80px", height: "35px" }}
            src="/images/dating/logoo.png"
          />
        </a>

        <div
          className={`d-none d-lg-block ${styles.loginbtn}`}
          style={{
            border: "3px solid white",
            borderRadius: "16px",
            color: "white",
            padding: "2px 20px 0px 20px",
          }}
        >
          <h6>Login</h6>
        </div>
      </div>

      <div className="h-75 w-100 position-relative pt-16 pb-32 d-flex justify-content-center align-items-center">
        <div
          className={`position-absolute top-0 h-100 w-100 ${styles.topbg}`}
          style={{
            backgroundImage: `url("/images/dating/couples.jpg")`,
          }}
        >
          <span
            className={`w-100 h-100 position-absolute opacity-75 ${styles.topbgspan}`}
          ></span>
        </div>

        <div className="position-relative mx-auto">
          <div className="align-items-center d-flex flex-wrap">
            <div className="w-100 w-lg-50 px-4 d-flex justify-content-center mx-auto text-center">
              <div className={`pr-12  ${styles.backgroundText}`}>
                <h1
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                  }}
                  data-aos="fade-up"
                >
                  It is Never Too Late
                </h1>
                <h1
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                  }}
                  data-aos="fade-up"
                >
                  To Fall in Love
                </h1>

                <p className="mt-4" data-aos="fade-right" data-aos-delay="1000">
                  One day someone will walk into your life and make you see why
                  it never worked out with anyone else
                </p>
                {/* data-aos-delay="1000" data-aos="fade-right" */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" d-flex justify-content-center w-100"
        style={{ backgroundColor: "#c1c5c5" }}
      >
        <div className={styles.innser}>
          <ServiceCard
            img={doll}
            heading="I'm A Robot"
            p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus autem maxime expedita aspernatur tempora."
            bgcolor="#F87171"
            dataos="fade-right"
            dataaosdelay="1200"
          />
          <ServiceCard
            img={love}
            heading="Atom Power"
            p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia nemo ex aut temporibus, in molestiae earum ratione."
            bgcolor="#60A5FA"
            dataos="fade-up"
            dataaosdelay="1400"
          />
          <ServiceCard
            img={girl}
            heading="Infinite Energy"
            p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia nemo ex aut temporibus, in molestiae earum ratione."
            bgcolor="#4ADE80"
            dataos="fade-right"
            dataaosdelay="1600"
          />
        </div>
      </div>
    </>
  );
}

export default NewSection1;
