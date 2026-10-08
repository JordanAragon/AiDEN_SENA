import DashboardShell from "../plantillas/DashboardShell";

const users = [
  ["Laura Méndez", "Supervisor", "Activo"],
  ["Carlos Ruiz", "Supervisor", "Activo"],
  ["Andrés Gómez", "Operario", "Pendiente"],
  ["María López", "Operario", "Activo"],
];

const activity = [
  ["Lote V-024", "Producción", "Etapa 3 completada"],
  ["Inventario", "Movimiento", "Entrada de sustrato"],
  ["Lote V-019", "Calidad", "Incidencia registrada"],
  ["Ana Torres", "Usuario", "Cuenta actualizada"],
];

export default function DashboardAdmin() {
  return (
    <DashboardShell
      role="Administrador"
      title="Centro de administración"
      description="Una lectura general del estado del vivero y de las personas que utilizan AiDEN."
    >
      <section className="metric-grid" aria-label="Indicadores principales">
        <article className="metric-card"><span>Lotes activos</span><strong>12</strong><small>+2 esta semana</small></article>
        <article className="metric-card"><span>Usuarios</span><strong>08</strong><small>1 pendiente</small></article>
        <article className="metric-card"><span>Incidencias</span><strong>03</strong><small>1 requiere atención</small></article>
        <article className="metric-card"><span>Actividades</span><strong>48</strong><small>78% completadas</small></article>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-panel wide-panel">
          <header className="panel-header">
            <section>
              <p className="panel-label">ACTIVIDAD RECIENTE</p>
              <h2>Lo que está pasando</h2>
            </section>
            <button className="small-button" type="button">Ver todo</button>
          </header>
          <table>
            <thead>
              <tr><th>Elemento</th><th>Tipo</th><th>Detalle</th></tr>
            </thead>
            <tbody>
              {activity.map(([item, type, detail]) => (
                <tr key={item + type}>
                  <td>{item}</td>
                  <td>{type}</td>
                  <td>{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <aside className="dashboard-panel">
          <header className="panel-header">
            <section>
              <p className="panel-label">OPERACIÓN</p>
              <h2>Estado general</h2>
            </section>
          </header>
          <ul className="status-list">
            <li><span>Producción</span><strong className="status-good">Estable</strong></li>
            <li><span>Inventario</span><strong className="status-warning">Revisar</strong></li>
            <li><span>Calidad</span><strong className="status-warning">3 alertas</strong></li>
            <li><span>Personal</span><strong className="status-good">Completo</strong></li>
          </ul>
        </aside>
      </section>

      <section className="dashboard-panel">
        <header className="panel-header">
          <section>
            <p className="panel-label">USUARIOS</p>
            <h2>Personas en el sistema</h2>
          </section>
          <button className="small-button" type="button">Nuevo usuario</button>
        </header>
        <table>
          <thead>
            <tr><th>Nombre</th><th>Rol</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {users.map(([name, role, status]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{role}</td>
                <td><span className={status === "Activo" ? "table-status active" : "table-status pending"}>{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </DashboardShell>
  );
}
