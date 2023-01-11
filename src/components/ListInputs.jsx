import React from "react";
import { InputForm } from "./InputForm";

export const ListInputs = ({
  elem,
  evalue,
  onInputChange,
  check,
  setCheck,
  index,
}) => {
  return (
    <>
      <InputForm
        key={index}
        label={elem.label}
        type={elem.type}
        name={elem.name}
        value={evalue(elem.name)}
        required={elem.required}
        onChange={onInputChange}
        options={elem.options}
        check={check}
        setCheck={setCheck}
      />
    </>
  );
};
