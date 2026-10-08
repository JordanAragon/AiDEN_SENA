const lots = [
  ["V-024", "Plántulas forestales", "Etapa 3", "82%", "En curso"],
  ["V-021", "Café variedad Castillo", "Etapa 2", "64%", "En curso"],
  ["V-019", "Especies nativas", "Etapa 4", "91%", "Revisión"],
  ["V-017", "Café variedad Cenicafé", "Etapa 2", "48%", "En curso"],
];

export default function TablaLotes() {
  return (
    <section className="dashboard-panel" id="produccion">
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
                <meter id={`progress-${lot}`} min="0" max="100" value={Number.parseInt(progress, 10)}>
                  {progress}
                </meter>
              </td>
              <td>
                <span className={status === "Revisión" ? "table-status pending" : "table-status active"}>
                  {status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
