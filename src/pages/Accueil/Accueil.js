import styles from "./Accueil.module.scss";

function Accueilpage() {
  return (
    <div className="flex-fill">
      <h1 className="mb-20"> Banner image</h1>
      <div className={styles.grid}>
        <div>ELEMENT</div>
        <div>ELEMENT</div>
        <div>ELEMENT</div>
        <div>ELEMENT</div>
      </div>
    </div>
  );
}
export default Accueilpage;

/*import React, { useEffect useState } from "react";*/

/*export default function Accueilpage() {
  const [data, setData] = useState([]);

 useEffect(() => {
    fetch(
      `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
    ).then((response) =>
      response
        .json()
        .then(({ data }) => console.log(data))
        .catch((error) => console.log(error))
    );
  }, []);

  return <h2>Accueil</h2>;
}*/
/*export default function Accueilpage() {
  useEffect(() => {
    fetch("../../data/data.json").then((res) => console.log(res));
  }, []);

  return <h2>Accueil</h2>;
}*/
