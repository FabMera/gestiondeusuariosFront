import React from "react";
import"../css/spinner.css"

const Spinner = () => {
  return (
    <div>
      <div className="spiner">
        <div className="sk-chase">
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
