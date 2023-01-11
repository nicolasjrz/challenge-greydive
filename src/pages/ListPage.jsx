import React from "react";
import { TableList } from "../components/TableList";
import FirebaseMethods from "../firebase/FirebaseMethods";
export const ListPage = () => {
  const { lista } = FirebaseMethods();

  return (
    <div className="min-h-screen  p-5 bg-page-list">
      <p className="text-4xl font-black pt-8  pb-8 text-center tg-title-list">
        Lista de usuarios
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400   ">
          <thead className="text-xs text-gray-900 uppercase bg-thead  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 tg-sub-title-list">
                Nombre completo
              </th>
              <th scope="col" className="px-6 py-3 tg-sub-title-list">
                Email
              </th>
              <th scope="col" className="px-6 py-3 tg-sub-title-list">
                Fecha de Nacimiento
              </th>
              <th scope="col" className="px-6 py-3 tg-sub-title-list">
                Pais
              </th>
            </tr>
          </thead>
          <tbody>
            {lista.map((elem, index) => (
              <TableList key={Math.random()} elem={elem} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
