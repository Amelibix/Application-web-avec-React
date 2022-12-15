import styles from "./Logement.module.scss";

function Logement({ title, image }) {
  return (
    <div className={styles.cards}>
      <img className={styles.cardsimg} src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Logement;
