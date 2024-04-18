import React from "react";
import { AppContext } from "../../contexts/AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import ItemDisplay from "../../pages/ItemDisplay";
import Search from "../../pages/Search";

export default function App() {
  return (
    <>
      <Router>
        <AppContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pesquisar" element={<Search />} />
            <Route path="/info" element={<ItemDisplay />} />
          </Routes>
        </AppContext>
      </Router>
    </>
  );
}
