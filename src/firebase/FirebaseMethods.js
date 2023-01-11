import app from "./firebase.config";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);
const FirebaseMethods = () => {
  const [lista, setLista] = useState([]);

  const AgregarUsuario = async (formState) => {
    await addDoc(collection(db, "users"), {
      ...formState,
    });
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setLista(docs);
      } catch (error) {}
    };
    getLista();
  }, []);

  return { AgregarUsuario, lista };
};
export default FirebaseMethods;
