import styles from "./Accueil.module.scss";
import Logement from "../../components/Logements/Logement";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";

function Accueilpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("data.json");
      const data = await response.json();
      setData(data);
    }
    fetchdata();
  }, []);

  return (
    <div className={`${styles.bannerAccueil}flex-fill`}>
      <Banner />
      <div className={styles.contentCard}>
        <div className={styles.grid}>
          {data.map((r) => (
            <Logement key={r.id} title={r.title} image={r.cover} id={r.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Accueilpage;
