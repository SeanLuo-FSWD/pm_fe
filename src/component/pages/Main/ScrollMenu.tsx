import React, { useEffect } from "react";
import styles from "./ScrollMenu.module.scss";
import { Link, Events, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

function ScrollMenu(prop: any) {
  // useEffect(() => {
  //   Events.scrollEvent.register("begin", function () {
  //     console.log("begin", arguments);
  //   });

  //   Events.scrollEvent.register("end", function () {
  //     console.log("end", arguments);
  //   });

  //   return () => {
  //     Events.scrollEvent.remove("begin");
  //     Events.scrollEvent.remove("end");
  //   };
  // }, []);

  function scrollToTop() {
    scroll.scrollToTop();
  }
  return (
    <div
      className={
        prop.mode
          ? `${styles.scrollMenu}`
          : `${styles.scrollMenu} ${styles.dark}`
      }
    >
      <p>
        <Link
          activeClass="active"
          className="sec1"
          to="sec1"
          spy={true}
          smooth={true}
          duration={300}
        >
          1. <span>Introduction</span>
        </Link>
      </p>
      <p>
        <Link
          activeClass="active"
          className="sec2"
          to="sec2"
          spy={true}
          smooth={true}
          duration={300}
        >
          2. <span>The cause of the problem</span>
        </Link>
      </p>
      <p>
        <Link to="sec3">
          3. <span>The impact of the problem</span>
        </Link>
      </p>
      <p>
        <Link to="sec4">
          4. <span>The two obstacles</span>
        </Link>
      </p>
      <p>
        <Link to="sec5">
          5. <span>The missing link</span>
        </Link>
      </p>
      <p>
        <Link to="sec6">
          6. <span>The bad state</span>
        </Link>
      </p>
      <p>
        <Link to="sec7">
          7. <span>The ideal state</span>
        </Link>
      </p>
      <p>
        <Link to="sec8">
          8. <span>A beautiful world</span>
        </Link>
      </p>
      <p>
        <Link to="sec9">
          9. <span>The path</span>
        </Link>
      </p>
      <p>
        <Link to="sec10">
          10. <span>The answer</span>
        </Link>
      </p>
      <p>
        <Link to="sec11">
          11. <span>Conclusion</span>
        </Link>
      </p>

      <p className={`${styles.top}`} onClick={scrollToTop}>
        Go to Top
      </p>
    </div>
  );
}

export default ScrollMenu;
