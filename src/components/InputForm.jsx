export const InputForm = ({ ...props }) => {
  const {
    label,
    type,
    name,
    value,
    onChange,
    required,
    options,
    check,
    setCheck,
    onClick,
  } = props;

  const handleChange = () => {
    setCheck(!check);
  };

  return (
    <>
      {type === "checkbox" ? (
        <div className="flex items-center mb-4 pt-5">
          <input
            type={type}
            id="checkbox"
            className="w-4 h-4 text-grey-600 bg-gray-100 border-gray-300 rounded focus:ring-grey-600 dark:focus:ring-grey-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            name={name}
            checked={check}
            onChange={handleChange}
            onClick={onChange}
            value={!check}
            required={required}
          />
          <label
            className="ml-2 text-sm font-medium text-grey-600 dark:text-gray-600"
            htmlFor={name}
          >
            {label}
          </label>
        </div>
      ) : type === "select" ? (
        <div className="mb-6 ">
          <label
            className="block mb-2 text-sm font-medium text-grey-600 dark:text-white"
            htmlFor={name}
          >
            {label}
          </label>

          <select
            id={name}
            onChange={onChange}
            name={name}
            required={required}
            className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-600 focus:border-grey-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-600 dark:focus:border-grey-600"
          >
            <option disabled selected value="">
              Selecione un pais
            </option>
            {options.map((elem) => (
              <option value={elem.value}> {elem.label} </option>
            ))}
          </select>
        </div>
      ) : type === "submit" ? (
        <div className="mb-6 text-center">
          <button
            onClick={onClick}
            type={type}
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            {label}
          </button>
        </div>
      ) : (
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-grey-600 dark:text-white"
            htmlFor={name}
          >
            {label}
          </label>
          <input
            id={name}
            className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-600 focus:border-grey-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-600 dark:focus:border-grey-600"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          />
        </div>
      )}
    </>
  );
};
