import React from "react";

export const TableList = ({ elem, index }) => {
  const isPar = (value) => {
    return value % 2 === 0;
  };
  return (
    <>
      <tr
        className={`${
          isPar(index) ? "bg-white " : "bg-tr  "
        }border-b dark:bg-gray-900 dark:border-gray-700`}
      >
        <th
          scope="row"
          className="px-6 py-4  whitespace-nowrap dark:text-white"
        >
          {elem.full_name}
        </th>
        <td className="px-6 py-4 tg-p-list">{elem.email}</td>
        <td className="px-6 py-4 tg-p-list">{elem.birth_date}</td>
        <td className="px-6 py-4 tg-p-list ">{elem.country_of_origin}</td>
      </tr>
    </>
  );
};
