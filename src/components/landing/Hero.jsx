export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <section className="container hero-grid">
        <article className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Gestión operativa para viveros</p>
          <h1 id="hero-title">
            El vivero no es una colección de datos. <em>Es una operación.</em>
          </h1>
          <p className="hero-text">
            AiDEN reúne la información principal del vivero en una interfaz sencilla
            para consultar el estado de los lotes, supervisar actividades y tomar
            decisiones con mejor contexto.
          </p>
          <nav className="hero-actions" aria-label="Acciones principales">
            <a className="button button-dark" href="/admin">Explorar administración</a>
            <a className="text-link" href="#sistema">Conocer el sistema <span>↓</span></a>
          </nav>
        </article>

        <figure className="dashboard-preview" aria-labelledby="preview-caption">
          <header className="preview-header">
            <span>AiDEN / RESUMEN</span>
            <span>Hoy · 08:45</span>
          </header>
          <section className="preview-content">
            <p className="preview-label">Estado del vivero</p>
            <h2>Operación estable</h2>
            <p className="preview-muted">12 lotes activos · 4 actividades pendientes</p>
            <section className="preview-stats" aria-label="Resumen">
              <article><strong>12</strong><span>Lotes activos</span></article>
              <article><strong>48</strong><span>Actividades</span></article>
              <article><strong>03</strong><span>Alertas</span></article>
            </section>
            <section className="preview-progress" aria-label="Progreso general">
              <header><span>Producción semanal</span><strong>78%</strong></header>
              <meter min="0" max="100" value="78">78%</meter>
            </section>
          </section>
          <figcaption id="preview-caption">Vista conceptual del panel de operación</figcaption>
        </figure>
      </section>
    </section>
  );
}
