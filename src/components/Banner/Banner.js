import React from "react";

import styles from "./Banner.module.scss";

function Banner() {
  return (
    <div
      className={`${styles.banner} d-flex align-items-center justify-content-center`}
    >
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
/*<img
        className={styles.bannerImg}
        src={banner}
        alt="Banner, page d'Accueil"
      />*/
