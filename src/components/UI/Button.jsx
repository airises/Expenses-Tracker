import React from "react";
import './button.css'

function Buttons({children, ...otherProps}) {
  return (
    <div>
      <button className="btn" { ...otherProps } > 
        {children}
      </button>
    </div>
  );
}

export default Buttons;