import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import NotFoundPage from "./pages/NotFound";
import "./style/main.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/country/:name" element={<Details />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
