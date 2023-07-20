import React from "react";

export const InputField = ({
  placeholder,
  name,
  type,
  label,
  handleChange,
  value,
  background,
  required
}) => {
  return (
    <>
      <label htmlFor={name} className={`${label} p-2`} style={{fontSize: 12, fontWeight: 300}}>
        {name}
      </label>
      <input
        value={value}
        className="form-control bg-dark text-danger"
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        style={{ height: 40, boxShadow: "none", backgroundColor: `${background}`, fontSize: 12 }}
        required={required}
      />
    </>
  );
};
