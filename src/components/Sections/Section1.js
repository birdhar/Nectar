import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Section1.module.css";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Divider } from "@mui/material";
import AOS from "aos";

function Section1({ features, contact, home, about }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className={styles.header}>
        <nav>
          <img
            className={styles.logo}
            src="/images/dating/logoo.png"
            alt="logo"
          />

          {/* <h6 className={styles.headerlogo}>Nectar</h6> */}

          <img
            onClick={openMenu}
            className={styles.menu}
            src="/images/dating/menu.png"
            alt="menu"
          />

          <Menu
            id="lame-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Features</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>About</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>

          <ul data-aos="fade-left" className={styles.navul}>
            <li>
              <a href="#1" onClick={() => home("1")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#4"
                // ref={featuresRef}
                // id="features"
                onClick={() => features("4")}
              >
                Features
              </a>
            </li>
            <li>
              <a href="#2" onClick={() => about("2")}>
                About
              </a>
            </li>
            <li>
              <a href="#5" onClick={() => contact("5")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div data-aos="zoom-in" className={styles.textbox}>
          <h2>
            Go On
            <br /> Your First Date
          </h2>
          <p>Find that special someone who really gets you</p>
          <button disabled type="button" className={styles.btn}>
            Join the Club
          </button>
        </div>

        <div className={styles.down}>
          <a href="#2" onClick={() => about("2")}>
            <img
              className={styles.downwhite}
              src="/images/datingNew/down.png"
            />
          </a>
          <a href="#2" onClick={() => about("2")}>
            <img
              className={styles.downred}
              src="/images/datingNew/downred.png"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Section1;
