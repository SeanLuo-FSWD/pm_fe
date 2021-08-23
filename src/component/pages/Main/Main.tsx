import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import styles from "./Main.module.scss";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Switch from "@material-ui/core/Switch";
import Text from "./Text";
import ScrollMenu from "./ScrollMenu";

function Main() {
  const [lightMode, setLightMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLightMode(!lightMode);
  };

  return (
    <>
      <Navbar />
      <div className={`banner`}>
        <h1>Fixing Wealth Inequality</h1>
        <h2>The Prosperity Manifesto</h2>
      </div>

      <section
        className={
          lightMode ? `${styles.content}` : `${styles.content} ${styles.dark}`
        }
      >
        <div className={`${styles.options}`}>
          <div className="flex_center">
            <p>For the audio version on Youtube, click here </p>
            <YouTubeIcon className={`${styles.ytbIcon}`} />
          </div>

          <div className="flex_center">
            <p>
              To switch to {lightMode ? <span>dark</span> : <span>light</span>}{" "}
              mode, click here
            </p>
            <Switch
              checked={lightMode}
              onChange={handleChange}
              color="default"
            />
          </div>
        </div>

        <div className={`${styles.contentGrid}`}>
          <ScrollMenu mode={lightMode} />
          <Text />
        </div>
      </section>
    </>
  );
}

export default Main;
