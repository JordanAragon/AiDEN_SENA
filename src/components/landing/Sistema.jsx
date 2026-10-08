const connections = [
  ["Producción", "El lote define el contexto", "Etapa, actividad y avance se leen desde el mismo lote."],
  ["Inventario", "Los insumos acompañan el proceso", "Entradas y existencias quedan vinculadas al trabajo."],
  ["Ambiental", "El entorno queda registrado", "Las condiciones aportan contexto al seguimiento."],
  ["Calidad", "Las incidencias tienen seguimiento", "Cada hallazgo mantiene su relación con la operación."],
  ["Trazabilidad", "Los eventos conservan su historia", "Los cambios forman una secuencia revisable."],
  ["Reportes", "La información llega con contexto", "Los registros se convierten en una lectura operativa."],
];

export default function Sistema() {
  return (
    <section className="aiden-system" id="sistema">
      <div className="aiden-shell">
        <header className="aiden-section-header aiden-section-header-dark">
          <div>
            <p className="aiden-index">EL SISTEMA</p>
            <h2>Una operación.<br /><em>Un contexto.</em></h2>
          </div>
          <p>
            El lote funciona como punto de lectura para conectar eventos que,
            de otra forma, aparecen como registros aislados.
          </p>
        </header>

        <article className="aiden-operation-map">
          <div className="aiden-map-visual">
            <span className="aiden-map-eyebrow">RELACIONES DEL SISTEMA</span>
            <span className="aiden-map-ring aiden-map-ring-one" />
            <span className="aiden-map-ring aiden-map-ring-two" />
            {connections.map(([name], index) => (
              <span className={`aiden-map-node aiden-map-node-${index + 1}`} key={name}>
                {name}
              </span>
            ))}
            <span className="aiden-map-core">
              <span aria-hidden="true">✦</span>
              <small>CONTEXTO</small>
              <strong>Lote</strong>
              <b>Activo</b>
            </span>
          </div>

          <div className="aiden-map-copy">
            <p className="aiden-kicker aiden-kicker-light">Cómo se relaciona la información</p>
            <div className="aiden-connection-list">
              {connections.map(([name, text, detail], index) => (
                <button className="aiden-connection-item" type="button" key={name}>
                  <span>0{index + 1}</span>
                  <span>
                    <strong>{name}</strong>
                    <p>{text}</p>
                    <small>{detail}</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </div>
        </article>

        <div className="aiden-system-readout">
          <div><span>Contexto</span><strong>Por lote</strong><small>La operación mantiene su referencia</small></div>
          <div><span>Relación</span><strong>Conectada</strong><small>Registros vinculados al proceso</small></div>
          <div><span>Seguimiento</span><strong>Continuo</strong><small>Cambios y señales quedan visibles</small></div>
          <div><span>Acción</span><strong>Orientada</strong><small>La información apunta al siguiente paso</small></div>
        </div>
      </div>
    </section>
  );
}
