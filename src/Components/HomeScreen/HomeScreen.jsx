import React from "react";
import "./homeScreen.css";
import { Suspense, lazy } from "react";

export const HomeScreen = () => {
  return (
    <>
      <Suspense fallback={<h1>...Cargando</h1>}>
        <div className="hero"></div>
      </Suspense>
    </>
  );
};

export default HomeScreen;
