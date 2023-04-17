import React from "react";
import "./input.css";

function Input(props) {
  return (
    <div>
      <div>
        <label className="label" html={props.id}>
          {props.children}
        </label>
        <input
          className="input"
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default Input;
