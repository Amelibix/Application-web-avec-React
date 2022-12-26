import React from "react";
import { useState } from "react";
import styles from "./Collapse.module.scss";
import vector from "../../assets/images/vector.png";

function Collapsible({ title, texte }) {
  const [open, setOPen] = useState(false);
  const [rotate, setRotate] = useState("180deg");

  const collapse = () => {
    setOPen(!open);
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
  };

  return (
    <div className={`d-flex flex-column ${styles.collapse}`}>
      <div className={`d-flex ${styles.containerButton}`}>
        <h2 className="">{title}</h2>

        <button>
          <img
            onClick={collapse}
            style={{ rotate: `${rotate}` }}
            src={vector}
            alt={title}
          />
        </button>
      </div>
      <div className={`d-flex ${styles.textOpen}`}>
        {open && (
          <div className={`d-flex ${styles.text}`}>
            <p>{texte}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapsible;
