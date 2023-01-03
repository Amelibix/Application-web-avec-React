import React from "react";
import { useEffect, useState } from "react";
//import { data } from "../../data/dataLogement";
import { useParams } from "react-router-dom";
//import Error from "../../pages/ErrorPage/ErrorPage";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./LogementPage.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import StarsPage from "../../components/Stars/Stars";
//import { redirect } from "react-router-dom";

function LogementPage() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("http://localhost:3000/data.json");
      const data = await response.json();

      const foundItem = data.find((c) => c.id === id);

      /*if (!foundItem) {
        return redirect("/error");
      }*/
      setItem(foundItem);
    }
    fetchdata();
  }, [id]);

  if (!item) {
    return <></>;
  }

  const equipementList = item.equipments.map((e) => <li key={e}>{e}</li>);

  return (
    <>
      <Carousel data={item.pictures} />
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
          <div className={`d-flex  ${styles.stars}`}>
            <StarsPage rating={item.rating} />
          </div>
        </div>
      </div>

      <div className={`d-flex  ${styles.collapse}`}>
        <div>
          <Collapse texte={item.description} title="Description" />
        </div>
        <div>
          <Collapse texte={equipementList} title="Equipements" />
        </div>
      </div>
    </>
  );
}

export default LogementPage;
