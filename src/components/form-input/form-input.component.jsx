import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {lable ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-lable`}
        ></label>
      ) : null}
    </div>
  );
};

export default form - input.component;
