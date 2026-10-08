const modules = [
  ["01", "Producción", "Lotes, etapas y actividades", "Seguimiento básico de lotes y etapas.", "span"],
  ["02", "Inventario", "Existencias y movimientos", "Consulta de insumos y existencias.", "span"],
  ["03", "Trazabilidad", "Historia de cada lote", "Historial sencillo de cada lote.", "span"],
  ["04", "Ambiental", "Condiciones de cultivo", "Registro de condiciones del cultivo.", "small"],
  ["05", "Calidad", "Incidencias y seguimiento", "Situaciones que necesitan atención.", "small"],
  ["06", "Reportes", "Lectura operativa", "Información resumida para decidir.", "small"],
];

export default function Modulos() {
  return (
    <section className="aiden-modules" id="modulos">
      <div className="aiden-shell">
        <header className="aiden-section-header">
          <div>
            <p className="aiden-index">MÓDULOS</p>
            <h2>Todo el sistema.<br /><em>Cada pieza tiene trabajo.</em></h2>
          </div>
          <p>
            Esta versión académica conserva la lógica visual de AiDEN y reduce
            la cantidad de áreas para concentrarse en lo esencial.
          </p>
        </header>

        <section className="aiden-bento">
          {modules.map(([number, name, kind, description, size], index) => (
            <a
              href={index === 0 ? "#produccion" : "#roles"}
              className={`aiden-bento-card bento-${index + 1}`}
              key={name}
            >
              <span className="aiden-bento-number">{number}</span>
              <span className="aiden-bento-icon" aria-hidden="true">↗</span>
              <span className="aiden-bento-kind">{kind}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              {size === "small" && <span aria-hidden="true" />}
            </a>
          ))}
        </section>
      </div>
    </section>
  );
}
