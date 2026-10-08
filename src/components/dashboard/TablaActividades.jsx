const activity = [
  ["Lote V-024", "Producción", "Etapa 3 completada"],
  ["Inventario", "Movimiento", "Entrada de sustrato"],
  ["Lote V-019", "Calidad", "Incidencia registrada"],
  ["Ana Torres", "Usuario", "Cuenta actualizada"],
];

export default function TablaActividades() {
  return (
    <article className="dashboard-panel wide-panel" id="produccion">
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
  );
}
