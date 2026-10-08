import DashboardShell from "../plantillas/DashboardShell";

const lots = [
  ["V-024", "Plántulas forestales", "Etapa 3", "82%", "En curso"],
  ["V-021", "Café variedad Castillo", "Etapa 2", "64%", "En curso"],
  ["V-019", "Especies nativas", "Etapa 4", "91%", "Revisión"],
  ["V-017", "Café variedad Cenicafé", "Etapa 2", "48%", "En curso"],
];

const tasks = [
  ["Revisar humedad del lote V-019", "Hoy", "Prioridad alta"],
  ["Confirmar entrada de sustrato", "Hoy", "Normal"],
  ["Cerrar actividad del lote V-017", "Mañana", "Normal"],
];

export default function DashboardSupervisor() {
  return (
    <DashboardShell
      role="Supervisor"
      title="Panel de supervisión"
      description="Seguimiento de lotes, actividades y novedades que necesitan atención durante la jornada."
    >
      <section className="metric-grid" aria-label="Indicadores de supervisión">
        <article className="metric-card"><span>Lotes en curso</span><strong>12</strong><small>4 en etapa final</small></article>
        <article className="metric-card"><span>Tareas pendientes</span><strong>07</strong><small>2 para hoy</small></article>
        <article className="metric-card"><span>Alertas</span><strong>03</strong><small>1 alta prioridad</small></article>
        <article className="metric-card"><span>Avance semanal</span><strong>78%</strong><small>+6% frente a la semana anterior</small></article>
      </section>

      <section className="dashboard-panel">
        <header className="panel-header">
          <section>
            <p className="panel-label">PRODUCCIÓN</p>
            <h2>Lotes activos</h2>
          </section>
          <button className="small-button" type="button">Ver producción</button>
        </header>
        <table>
          <thead>
            <tr><th>Lote</th><th>Descripción</th><th>Etapa</th><th>Avance</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {lots.map(([lot, description, stage, progress, status]) => (
              <tr key={lot}>
                <td><strong>{lot}</strong></td>
                <td>{description}</td>
                <td>{stage}</td>
                <td>
                  <label className="progress-label" htmlFor={`progress-${lot}`}>{progress}</label>
                  <meter id={`progress-${lot}`} min="0" max="100" value={Number.parseInt(progress, 10)}>{progress}</meter>
                </td>
                <td><span className={status === "Revisión" ? "table-status pending" : "table-status active"}>{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-panel">
          <header className="panel-header">
            <section>
              <p className="panel-label">TAREAS</p>
              <h2>Próximas actividades</h2>
            </section>
          </header>
          <ol className="task-list">
            {tasks.map(([task, date, priority], index) => (
              <li key={task}>
                <span className="task-index">0{index + 1}</span>
                <section>
                  <strong>{task}</strong>
                  <small>{date} · {priority}</small>
                </section>
              </li>
            ))}
          </ol>
        </article>

        <aside className="dashboard-panel alert-panel">
          <p className="panel-label">ATENCIÓN</p>
          <h2>Hay una novedad pendiente</h2>
          <p>El lote V-019 registra una condición ambiental fuera del rango esperado. Revisa la lectura antes de cerrar la jornada.</p>
          <button className="button button-dark" type="button">Revisar incidencia</button>
        </aside>
      </section>
    </DashboardShell>
  );
}
