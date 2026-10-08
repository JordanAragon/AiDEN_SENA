import { useEffect, useState } from "react";

export default function BarraNavegacion() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`aiden-header ${compact ? "is-compact" : ""}`}>
      <nav className="aiden-shell aiden-header-inner" aria-label="Navegación principal">
        <a href="/" className="aiden-brand" onClick={() => setMenuOpen(false)}>
          <span className="aiden-brand-mark" aria-hidden="true">A</span>
          <span>AiDEN</span>
        </a>

        <div className="aiden-header-links">
          <a href="#operacion">La operación</a>
          <a href="#sistema">El sistema</a>
          <a href="#modulos">Módulos</a>
          <a href="#roles">Roles</a>
        </div>

        <div className="aiden-header-actions">
          <a href="/admin" className="aiden-header-login">Administración</a>
          <a href="/supervisor" className="aiden-button aiden-button-dark">Supervisión →</a>
        </div>

        <button
          type="button"
          className="aiden-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      <nav className={`aiden-mobile-panel ${menuOpen ? "is-visible" : ""}`} aria-label="Navegación móvil">
        <a href="#operacion" onClick={() => setMenuOpen(false)}>La operación</a>
        <a href="#sistema" onClick={() => setMenuOpen(false)}>El sistema</a>
        <a href="#modulos" onClick={() => setMenuOpen(false)}>Módulos</a>
        <a href="#roles" onClick={() => setMenuOpen(false)}>Roles</a>
        <a href="/admin" className="aiden-button aiden-button-ghost" onClick={() => setMenuOpen(false)}>Administración</a>
        <a href="/supervisor" className="aiden-button aiden-button-dark" onClick={() => setMenuOpen(false)}>Supervisión</a>
      </nav>
    </header>
  );
}
