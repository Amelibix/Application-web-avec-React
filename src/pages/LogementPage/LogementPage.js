import React from "react";
import { useEffect, useState } from "react";
import { data } from "../../data/dataLogement";
import { useParams } from "react-router-dom";
import Error from "../../pages/ErrorPage/ErrorPage";
import Caroussel from "../../components/Caroussel/Caroussel";
import styles from "./LogementPage.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import StarsPage from "../../components/Stars/Stars";

function LogementPage() {
  const { id } = useParams();
  const [item, setItem] = useState();

  /*const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("../../data/data.json");
      const data = await response.json();
      setData(data);
    }
    fetchdata();
  }, []);*/

  useEffect(() => {
    const foundItem = data.find((c) => c.id === id);

    setItem(foundItem);
  }, [id]);

  if (!item) {
    return <Error />;
  }

  const equipementList = item.equipments.map((e) => <li key={e}>{e}</li>);

  return (
    <>
      <Caroussel />
      <div className={`d-flex ${styles.container}`}>
        <div className={`d-flex flex-column ${styles.containerLeft}`}>
          <div>
            <h1>{item.title}</h1>
            <p>{item.location}</p>
          </div>

          <div>
            <ul className="d-flex">
              {item.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.containerRight}`}>
          <div className={`d-flex ${styles.host}`}>
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt={item.host.name} />
          </div>
          <div>
            <StarsPage rating={item.rating} />
          </div>
        </div>
      </div>

      <div className={`d-flex  ${styles.collapse}`}>
        <div className={` ${styles.description}`}>
          <Collapse texte={item.description} title="Description" />
        </div>
        <div className={`${styles.equipements}`}>
          <Collapse texte={equipementList} title="Equipements" />
        </div>
      </div>
    </>
  );
}

export default LogementPage;
