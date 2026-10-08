import DashboardShell from "../plantillas/DashboardShell";
import TarjetaMetrica from "../components/dashboard/TarjetaMetrica";
import TablaActividades from "../components/dashboard/TablaActividades";
import TablaUsuarios from "../components/dashboard/TablaUsuarios";
import PanelEstado from "../components/dashboard/PanelEstado";

export default function DashboardAdmin() {
  return (
    <DashboardShell
      role="Administrador"
      title="Centro de administración"
      description="Una lectura general del estado del vivero y de las personas que utilizan AiDEN."
    >
      <section className="metric-grid" aria-label="Indicadores principales">
        <TarjetaMetrica label="Lotes activos" value="12" detail="+2 esta semana" />
        <TarjetaMetrica label="Usuarios" value="08" detail="1 pendiente" />
        <TarjetaMetrica label="Incidencias" value="03" detail="1 requiere atención" />
        <TarjetaMetrica label="Actividades" value="48" detail="78% completadas" />
      </section>

      <section className="dashboard-grid">
        <TablaActividades />
        <PanelEstado />
      </section>

      <TablaUsuarios />
    </DashboardShell>
  );
}
