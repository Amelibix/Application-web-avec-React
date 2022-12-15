import React from "react";
import banner from "../../assets/images/banner.png";
import styles from "./Banner.module.scss";

function Banner() {
  return (
    <div className={`${styles.banner} d-flex flex-column align-items-center`}>
      <img
        className={styles.bannerImg}
        src={banner}
        alt="Banner, page d'Accueil"
      />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
