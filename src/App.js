import React from "react";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./Pages/CreateUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-unmr" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
