export default function PanelEstado() {
  const statuses = [
    ["Producción", "Estable", "status-good"],
    ["Inventario", "Revisar", "status-warning"],
    ["Calidad", "3 alertas", "status-warning"],
    ["Personal", "Completo", "status-good"],
  ];

  return (
    <aside className="dashboard-panel">
      <header className="panel-header">
        <section>
          <p className="panel-label">OPERACIÓN</p>
          <h2>Estado general</h2>
        </section>
      </header>
      <ul className="status-list">
        {statuses.map(([name, status, className]) => (
          <li key={name}>
            <span>{name}</span>
            <strong className={className}>{status}</strong>
          </li>
        ))}
      </ul>
    </aside>
  );
}
