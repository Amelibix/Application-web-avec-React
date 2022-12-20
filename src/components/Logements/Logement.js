import { NavLink } from "react-router-dom";
import styles from "./Logement.module.scss";
//import { useEffect } from "react";

function Logement({ title, image }) {
  /* useEffect(() => {
    fetch(test).then((response) =>
      response
        .json()
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    );
  }, []);*/
  return (
    <NavLink to="/logement">
      <div className={styles.cards}>
        <img className={styles.cardsimg} src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default Logement;
