import { useState } from "react";

import FirebaseMethods from "../firebase/FirebaseMethods";

export const useForm = (initialForm = {}) => {
  const { AgregarUsuario } = FirebaseMethods();

  const [formState, setFormState] = useState(initialForm);
  //console.log(formState);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleReset = () => {
    setFormState(initialForm);
  };

  const onFormSubmit = async () => {
    AgregarUsuario(formState);
    handleReset();
  };

  return { ...formState, formState, setFormState, onInputChange, onFormSubmit };
};
