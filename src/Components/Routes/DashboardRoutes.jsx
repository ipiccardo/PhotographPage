import React from "react";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { Galery } from "../Galery/Galery";
import { Routes, Route, Navigate } from "react-router-dom";

export const DashBoardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path="/Titulo13" element={<HomeScreen />} />
        <Route path="/Titulo4" element={<HomeScreen />} />
        <Route path="/*" element={<Navigate to="HomeScreen" />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
