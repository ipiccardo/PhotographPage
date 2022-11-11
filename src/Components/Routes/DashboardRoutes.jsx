import React from "react";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { Galery } from "../Galery/Galery";
import { Routes, Route, Navigate } from "react-router-dom";
import {Biography} from '../Biography/Biography'

export const DashBoardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path="/Biography" element={<Biography />} />
        <Route path="/*" element={<Navigate to="HomeScreen" />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
