import React from "react";

import RutaProtegida from "../components/autenticacion/RutaProtegida";
import DashboardOperarioContenido from "../components/dashboard/DashboardOperarioContenido";

export default function DashboardOperario() {
  return (
    <RutaProtegida>
      <DashboardOperarioContenido />
    </RutaProtegida>
  );
}
