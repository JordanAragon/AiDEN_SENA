import DashboardShell from "../plantillas/DashboardShell";
import TarjetaMetrica from "../components/dashboard/TarjetaMetrica";
import TablaLotes from "../components/dashboard/TablaLotes";
import ListaTareas from "../components/dashboard/ListaTareas";
import PanelAlertas from "../components/dashboard/PanelAlertas";

export default function DashboardSupervisor() {
  return (
    <DashboardShell
      role="Supervisor"
      title="Panel de supervisión"
      description="Seguimiento de lotes, actividades y novedades que necesitan atención durante la jornada."
    >
      <section className="metric-grid" aria-label="Indicadores de supervisión">
        <TarjetaMetrica label="Lotes en curso" value="12" detail="4 en etapa final" />
        <TarjetaMetrica label="Tareas pendientes" value="07" detail="2 para hoy" />
        <TarjetaMetrica label="Alertas" value="03" detail="1 alta prioridad" />
        <TarjetaMetrica label="Avance semanal" value="78%" detail="+6% frente a la semana anterior" />
      </section>

      <TablaLotes />

      <section className="dashboard-grid">
        <ListaTareas />
        <PanelAlertas />
      </section>
    </DashboardShell>
  );
}
