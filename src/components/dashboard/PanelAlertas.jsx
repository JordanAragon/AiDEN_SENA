export default function PanelAlertas() {
  return (
    <aside className="dashboard-panel alert-panel" id="calidad">
      <p className="panel-label">ATENCIÓN</p>
      <h2>Hay una novedad pendiente</h2>
      <p>
        El lote V-019 registra una condición ambiental fuera del rango esperado.
        Revisa la lectura antes de cerrar la jornada.
      </p>
      <button className="button button-dark" type="button">Revisar incidencia</button>
    </aside>
  );
}
