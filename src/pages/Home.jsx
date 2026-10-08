import { useState } from "react";

const modules = [
  ["Producción", "Seguimiento básico de lotes y etapas."],
  ["Inventario", "Consulta de insumos y existencias."],
  ["Trazabilidad", "Historial sencillo de cada lote."],
  ["Ambiental", "Registro de condiciones del cultivo."],
  ["Calidad", "Incidencias que necesitan seguimiento."],
  ["Reportes", "Información resumida para tomar decisiones."],
];

const roles = [
  ["Administrador", "Gestiona usuarios, configuración y visión general.", "/admin"],
  ["Supervisor", "Supervisa la operación y revisa alertas.", "/supervisor"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="landing">
      <header className="site-header">
        <nav className="container navigation" aria-label="Navegación principal">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span>AiDEN</span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Cerrar" : "Menú"}
          </button>

          <ul className={`navigation-links ${menuOpen ? "is-open" : ""}`} id="site-menu">
            <li><a href="#sistema" onClick={() => setMenuOpen(false)}>Sistema</a></li>
            <li><a href="#modulos" onClick={() => setMenuOpen(false)}>Módulos</a></li>
            <li><a href="#roles" onClick={() => setMenuOpen(false)}>Roles</a></li>
            <li><a className="button button-dark" href="/admin" onClick={() => setMenuOpen(false)}>Ver demo</a></li>
          </ul>
        </nav>
      </header>

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
          <article><span>01</span><strong>Registrar</strong><p>La actividad queda documentada.</p></article>
          <article><span>02</span><strong>Organizar</strong><p>Los datos mantienen su contexto.</p></article>
          <article><span>03</span><strong>Supervisar</strong><p>Las novedades aparecen a tiempo.</p></article>
          <article><span>04</span><strong>Decidir</strong><p>La información ayuda al siguiente paso.</p></article>
        </section>
      </section>

      <section className="section" id="modulos" aria-labelledby="modules-title">
        <section className="container">
          <header className="section-heading">
            <p className="section-index">02 / MÓDULOS</p>
            <h2 id="modules-title">Lo necesario para entender <em>la operación.</em></h2>
            <p>La plataforma puede crecer, pero esta versión se concentra en una base sencilla y fácil de mantener.</p>
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

      <section className="section section-dark" id="roles" aria-labelledby="roles-title">
        <section className="container">
          <header className="section-heading dark-heading">
            <p className="section-index">03 / ROLES</p>
            <h2 id="roles-title">La misma operación. <em>Dos formas de verla.</em></h2>
            <p>El acceso cambia según la responsabilidad de cada persona dentro del vivero.</p>
          </header>

          <section className="role-grid">
            {roles.map(([name, description, href], index) => (
              <article className="role-card" key={name}>
                <span>0{index + 1}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={href}>Abrir vista →</a>
              </article>
            ))}
          </section>
        </section>
      </section>

      <section className="section final-section" aria-labelledby="final-title">
        <section className="container final-content">
          <p className="section-index">ENTRAR</p>
          <h2 id="final-title">Una interfaz sencilla para una operación que <em>no lo es.</em></h2>
          <nav aria-label="Vistas de demostración">
            <a className="button button-dark" href="/admin">Administración</a>
            <a className="button button-outline" href="/supervisor">Supervisión</a>
          </nav>
        </section>
      </section>

      <footer className="site-footer">
        <section className="container footer-content">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span>AiDEN</span>
          </a>
          <p>Proyecto académico · Gestión de viveros</p>
        </section>
      </footer>
    </main>
  );
}
