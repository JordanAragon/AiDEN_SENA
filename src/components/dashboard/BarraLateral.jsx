import Logo from "../comunes/Logo";

const navigation = [
  ["Resumen", "#resumen"],
  ["Producción", "#produccion"],
  ["Inventario", "#inventario"],
  ["Calidad", "#calidad"],
];

export default function BarraLateral({ role, mobileNav }) {
  const isAdmin = role === "Administrador";

  return (
    <aside className={`dashboard-sidebar ${mobileNav ? "is-open" : ""}`}>
      <Logo />

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
  );
}
