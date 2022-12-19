import styles from "./Accueil.module.scss";
import Logement from "../../components/Logements/Logement";
import { data } from "../../data/dataLogement";
import Banner from "../../components/Banner/Banner";

function Accueilpage() {
  const logementData = data;

  return (
    <div className="flex-fill">
      <Banner />
      <div className={styles.contentCard}>
        <div className={styles.grid}>
          {logementData.map((r) => (
            <Logement key={r.id} title={r.title} image={r.cover} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Accueilpage;
