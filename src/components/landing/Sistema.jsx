const steps = [
  ["01", "Registrar", "La actividad queda documentada."],
  ["02", "Organizar", "Los datos mantienen su contexto."],
  ["03", "Supervisar", "Las novedades aparecen a tiempo."],
  ["04", "Decidir", "La información ayuda al siguiente paso."],
];

export default function Sistema() {
  return (
    <section className="section section-light" id="sistema" aria-labelledby="system-title">
      <section className="container two-column">
        <header>
          <p className="section-index">01 / EL SISTEMA</p>
          <h2 id="system-title">Menos información dispersa. <em>Más contexto.</em></h2>
        </header>
        <article className="section-copy">
          <p>
            Un lote cambia de etapa, consume insumos, tiene condiciones ambientales
            y puede presentar incidencias. AiDEN propone reunir esas piezas para que
            el equipo pueda entender qué está pasando sin buscar la información en
            diferentes lugares.
          </p>
          <p>
            Esta versión académica mantiene esa idea, pero reduce la cantidad de
            funciones para concentrarse en lo esencial: administración y supervisión.
          </p>
        </article>
      </section>

      <section className="container process-grid" aria-label="Flujo de información">
        {steps.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
