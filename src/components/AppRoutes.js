import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import BiografiaPage from "../pages/BiografiaPage";
import LogrosPage from "../pages/LogrosPage";
import PremiosPage from "../pages/PremiosPage";
import EstadoActualPage from "../pages/EstadoActualPage";
import EmpresasPage from "../pages/EmpresasPage";
import "../styles/PageTransitions.css";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector(".fade-container").classList.add("fade");
    setTimeout(
      () => document.querySelector(".fade-container").classList.remove("fade"),
      500
    );
  }, [location]);

  return (
    <div className="fade-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<BiografiaPage />} />
        <Route path="/logros" element={<LogrosPage />} />
        <Route path="/premios" element={<PremiosPage />} />
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path="/estado-actual" element={<EstadoActualPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
