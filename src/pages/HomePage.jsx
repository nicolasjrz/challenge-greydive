import { InputForm, Modal, CheckCircleIcon } from "../components";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/icon.png";
import data from "../data/db.json";
export const HomePage = () => {
  const {
    onInputChange,
    full_name,
    email,
    birth_date,
    country_of_origin,
    terms_and_conditions,
    onFormSubmit,
  } = useForm({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: false,
  });

  const evalue = (value) => {
    if (value === full_name) {
      return full_name;
    } else if (value === email) {
      return email;
    } else if (value === birth_date) {
      return birth_date;
    } else if (value === country_of_origin) {
      return country_of_origin;
    } else if (value === terms_and_conditions) {
      return terms_and_conditions;
    }
  };

  const navigate = useNavigate();

  const goList = () => {
    navigate("/list");
  };

  const getModal = (event) => {
    event.preventDefault();
    onFormSubmit();
    setModal(true);
    event.target.reset();
    setCheck(false);
  };

  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  return (
    <div className="min-h-screen flex justify-center bg-home">
      <div className="  justify-center py-6 px-6 lg:flex none  ">
        <div className=" px-12 flex h-screen flex-col  shadow-2xl rounded-md bg-white">
          <p className="text-5xl font-black pt-8  pb-8 ">
            Formulario de Registro
          </p>
          <form
            onSubmit={getModal}
            className=" h-full justify-around flex flex-col  "
          >
            {data.items.map((elem, index) => (
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
            ))}
          </form>
        </div>
        <div className="hidden lg:block  h-full flex-1 shadow-2xl rounded-md bg-form">
          <div className="flex h-screen justify-center  flex-col p-7">
            <img src={logo} alt="logo" width={150} />
            <div className="pt-6 pb-5">
              <p className="font-black text-white lg:text-5xl">Bienvenidos a</p>
              <p className=" font-black  text-black lg:text-7xl">Greeydive.</p>
            </div>
            <p className="max-w-lg text-2xl  leading-normal text-gray-100 dark:text-white lg:lg:text-1xl">
              La agencia de CRO y experiencia de usuario que te hará ver con los
              ojos de tus compradores.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Modal modal={modal} setModal={setModal}>
          <div className="text-center justify-center flex pb-4">
            <CheckCircleIcon width={65} color={"green"} />
          </div>
          <p className="text-2xl font-black pb-6">
            Usuario agregado correctamente!
          </p>

          <InputForm
            label="Ir a lista"
            type="submit"
            name="button"
            onClick={goList}
          />
        </Modal>
      </div>
    </div>
  );
};
