import styles from "./Accueil.module.scss";
//import React, { useEffect } from "react";
import Logement from "../Logements/Logement";
import { data } from "../../data/dataLogement";

function Accueilpage() {
  const logementData = data;

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30"> Banner image</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {logementData.map((r) => (
            <Logement key={r._id} title={r.title} image={r.cover} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Accueilpage;
