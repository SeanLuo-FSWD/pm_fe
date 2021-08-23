import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
      <a href="/" className={`${styles.link}`}>
        <p>Main</p>
      </a>

      <a href="/contact" className={`${styles.link}`}>
        <p>Contact</p>
      </a>
    </div>
  );
}

export default Navbar;
