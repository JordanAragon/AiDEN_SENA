export default function Hero() {
  return (
    <section className="aiden-hero" id="inicio">
      <div className="aiden-shell aiden-hero-grid">
        <article className="aiden-hero-copy">
          <p className="aiden-label">
            <span className="aiden-live-dot" />
            Plataforma operativa para viveros
          </p>

          <h1>
            El vivero no es una colección de datos. <em>Es una operación.</em>
          </h1>

          <p className="aiden-hero-lead">
            AiDEN reúne la información principal del vivero en una sola experiencia
            para entender qué está pasando y actuar con contexto.
          </p>

          <div className="aiden-hero-actions">
            <a href="/admin" className="aiden-button aiden-button-dark aiden-button-large">
              Explorar administración →
            </a>
            <a href="#operacion" className="aiden-text-link">
              <span>01</span>
              Ver la operación
            </a>
          </div>
        </article>

        <figure className="aiden-hero-product" aria-labelledby="preview-caption">
          <div className="aiden-product-frame">
            <section className="aiden-live-preview">
              <header>
                <span>AIDEN / RESUMEN</span>
                <span>HOY · 08:45</span>
              </header>
              <div>
                <p>Estado del vivero</p>
                <h2>Operación estable</h2>
                <small>12 lotes activos · 4 actividades pendientes</small>
                <section>
                  <article><strong>12</strong><span>Lotes activos</span></article>
                  <article><strong>48</strong><span>Actividades</span></article>
                  <article><strong>03</strong><span>Alertas</span></article>
                </section>
                <footer>
                  <span>Producción semanal</span>
                  <strong>78%</strong>
                </footer>
                <meter min="0" max="100" value="78">78%</meter>
              </div>
            </section>
            <span className="aiden-product-corner">PRODUCT / SYSTEM VIEW</span>
          </div>
          <figcaption id="preview-caption">
            <span>Vista del producto</span>
            <span>Lectura basada en datos registrados</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
