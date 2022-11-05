import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashBoardRoutes from "./DashboardRoutes";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashBoardRoutes />} />
      <Route path="/*" element={<Navigate to="HomeScreen" />} />
    </Routes>
  );
};

export default PagesRoute;
