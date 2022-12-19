import React from "react";
import { useState } from "react";

function Collapsible({ title, text }) {
  const [open, setOPen] = useState(false);

  const image = () => {
    setOPen(!open);
  };

  return (
    <div className="d-flex ">
      <div className="">
        <h2>
          {title}
          <button onClick={image}>
            <img src="../../assets/images/vector.png" alt={title} />
          </button>
        </h2>

        {open && (
          <div className="d-flex">
            <h4>toggle {text}</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapsible;
