import { useState } from "react";

const navigation = [
  ["Resumen", "#resumen"],
  ["Producción", "#produccion"],
  ["Inventario", "#inventario"],
  ["Calidad", "#calidad"],
];

export default function DashboardShell({ role, title, description, children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const isAdmin = role === "Administrador";

  return (
    <main className="dashboard-app" id="resumen">
      <aside className={`dashboard-sidebar ${mobileNav ? "is-open" : ""}`}>
        <a className="brand dashboard-brand" href="/">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>AiDEN</span>
        </a>

        <nav aria-label="Navegación del panel">
          <p>OPERACIÓN</p>
          <ul>
            {navigation.map(([name, href]) => (
              <li key={name}><a href={href}>{name}</a></li>
            ))}
          </ul>
          <p>CUENTA</p>
          <ul>
            <li><a href="/">Volver a inicio</a></li>
          </ul>
        </nav>

        <footer className="sidebar-footer">
          <span className="user-avatar">{isAdmin ? "AD" : "SV"}</span>
          <section>
            <strong>{role}</strong>
            <small>Sesión de demostración</small>
          </section>
        </footer>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <button
            className="dashboard-menu-button"
            type="button"
            aria-expanded={mobileNav}
            onClick={() => setMobileNav((open) => !open)}
          >
            {mobileNav ? "Cerrar" : "Menú"}
          </button>
          <nav aria-label="Acciones de cuenta">
            <a href="/">Inicio</a>
            <a href="/" className="logout-link">Salir</a>
          </nav>
        </header>

        <section className="dashboard-content">
          <header className="dashboard-title">
            <p className="section-index">AIDEN / {role.toUpperCase()}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </header>
          {children}
        </section>
      </section>
    </main>
  );
}
