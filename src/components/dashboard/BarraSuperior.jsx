export default function BarraSuperior({ mobileNav, onToggle }) {
  return (
    <header className="dashboard-header">
      <button
        className="dashboard-menu-button"
        type="button"
        aria-expanded={mobileNav}
        onClick={onToggle}
      >
        {mobileNav ? "Cerrar" : "Menú"}
      </button>
      <nav aria-label="Acciones de cuenta">
        <a href="/">Inicio</a>
        <a href="/" className="logout-link">Salir</a>
      </nav>
    </header>
  );
}
