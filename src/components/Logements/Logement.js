import { NavLink } from "react-router-dom";
import styles from "./Logement.module.scss";

function Logement({ title, image, _id }) {
  return (
    /*fetch ("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
.then((res)=> res.json())
.then((data)=> console.log)*/

    <NavLink to="/logement">
      <div className={styles.cards}>
        <img className={styles.cardsimg} src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default Logement;
