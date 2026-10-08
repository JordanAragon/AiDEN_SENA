import { useState } from "react";
import Logo from "./Logo";

export default function BarraNavegacion() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Navegación principal">
        <Logo />
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
          <li>
            <a className="button button-dark" href="/admin" onClick={() => setMenuOpen(false)}>
              Ver demo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
