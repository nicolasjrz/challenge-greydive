import React, { useState } from "react";

export const Checkbox = ({ label, name, onChange }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        onClick={onChange}
        value={checked}
      />
    </div>
  );
};
