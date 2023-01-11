import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, ListPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
