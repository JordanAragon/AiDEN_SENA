import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantillaPrincipal from "../plantillas/PlantillaPrincipal";
import RutaProtegida from "../components/autenticacion/RutaProtegida";
import CargandoVista from "../components/ui/CargandoVista";
import { PERMISOS } from "./permisos";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login.tsx"));
const Signup = lazy(() => import("../pages/Signup.tsx"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword.tsx"));
const InformacionLegal = lazy(() => import("../pages/InformacionLegal"));
const NoEncontrada = lazy(() => import("../pages/NoEncontrada"));
const Perfil = lazy(() => import("../pages/Perfil"));
const DashboardAdmin = lazy(() => import("../pages/DashboardAdmin.tsx"));
const DashboardSupervisor = lazy(() => import("../pages/DashboardSupervisor.tsx"));
const DashboardOperario = lazy(() => import("../pages/DashboardOperario.tsx"));
const InteligenciaArtificial = lazy(() => import("../pages/InteligenciaArtificial"));
const InventarioOperativo = lazy(() => import("../components/inventario/InventarioOperativo.tsx"));
const ProduccionOperativo = lazy(() => import("../components/produccion/ProduccionOperativo.tsx"));
const PersonalOperativo = lazy(() => import("../components/modulos/PersonalOperativo.tsx"));
const CostosOperativo = lazy(() => import("../components/modulos/CostosOperativo.tsx"));
const CalidadOperativo = lazy(() => import("../components/modulos/CalidadOperativo.tsx"));
const AmbientalOperativo = lazy(() => import("../components/modulos/AmbientalOperativo.tsx"));
const TrazabilidadOperativo = lazy(() => import("../components/modulos/TrazabilidadOperativo.tsx"));
const ConfiguracionOperativo = lazy(() => import("../components/modulos/ConfiguracionOperativo.tsx"));
const ReportesOperativo = lazy(() => import("../components/reportes/ReportesOperativo.tsx"));

const DesignSystem = lazy(() => import("../pages/DesignSystem.tsx"));

const VISTAS = {
  "/perfil": Perfil,
  "/dashboard-admin": DashboardAdmin,
  "/dashboard-supervisor": DashboardSupervisor,
  "/dashboard-operario": DashboardOperario,
  "/produccion": ProduccionOperativo,
  "/trazabilidad": TrazabilidadOperativo,
  "/ambiental": AmbientalOperativo,
  "/calidad": CalidadOperativo,
  "/inventario": InventarioOperativo,
  "/costos": CostosOperativo,
  "/personal": PersonalOperativo,
  "/reportes": ReportesOperativo,
  "/ia": InteligenciaArtificial,
  "/configuracion": ConfiguracionOperativo,
  "/design-system": DesignSystem,
};

const PRIVADAS = Object.entries(VISTAS).map(([path, Vista]) => ({ path, roles: PERMISOS[path], Vista }));

function CargandoPagina() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <CargandoVista />
    </div>
  );
}

export default function Rutas() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CargandoPagina />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terminos" element={<InformacionLegal />} />
          <Route path="/privacidad" element={<InformacionLegal />} />
          <Route element={<RutaProtegida />}>
            <Route element={<PlantillaPrincipal />}>
              {PRIVADAS.map(({ path, roles, Vista }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <RutaProtegida roles={roles}>
                      <Vista />
                    </RutaProtegida>
                  }
                />
              ))}
            </Route>
          </Route>
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
