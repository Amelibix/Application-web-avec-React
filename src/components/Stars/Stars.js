import React from "react";
import styles from "./Stars.module.scss";

function StarsPage(element, { rating }) {
  let numberStar = element.rating;

  const starsMax = 5;
  const stars = [];

  for (let i = 1; i < starsMax + 1; i++) {
    if (i <= numberStar) {
      stars.push(<img src="../../assets/images/stargray.png" alt={rating} />);
    } else {
      stars.push(<img src="../../assets/images/stargray.png" alt={rating} />);
    }
  }
}
export default StarsPage;
