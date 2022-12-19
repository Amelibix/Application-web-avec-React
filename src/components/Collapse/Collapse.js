import React from "react";
import { useState } from "react";
import styles from "./Collapse.module.scss";
import vector from "../../assets/images/vector.png";

function Collapsible({ title, text }) {
  const [open, setOPen] = useState(false);
  const [rotate, setRotate] = useState("180deg");

  const collapse = () => {
    setOPen(!open);
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
  };

  return (
    <div className={`d-flex flex-column ${styles.collapse}`}>
      <h2 className="">{title}</h2>

      <button className="">
        <img
          onClick={collapse}
          style={{ rotate: `${rotate}` }}
          src={vector}
          alt={title}
        />
      </button>

      {open && (
        <div className={`d-flex ${styles.text}`}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Collapsible;
