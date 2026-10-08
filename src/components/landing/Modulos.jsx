const modules = [
  ["Producción", "Seguimiento básico de lotes y etapas."],
  ["Inventario", "Consulta de insumos y existencias."],
  ["Trazabilidad", "Historial sencillo de cada lote."],
  ["Ambiental", "Registro de condiciones del cultivo."],
  ["Calidad", "Incidencias que necesitan seguimiento."],
  ["Reportes", "Información resumida para tomar decisiones."],
];

export default function Modulos() {
  return (
    <section className="section" id="modulos" aria-labelledby="modules-title">
      <section className="container">
        <header className="section-heading">
          <p className="section-index">02 / MÓDULOS</p>
          <h2 id="modules-title">Lo necesario para entender <em>la operación.</em></h2>
          <p>
            La plataforma puede crecer, pero esta versión se concentra en una base
            sencilla y fácil de mantener.
          </p>
        </header>

        <section className="module-grid">
          {modules.map(([name, description], index) => (
            <article className="module-card" key={name}>
              <span className="card-number">0{index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}
