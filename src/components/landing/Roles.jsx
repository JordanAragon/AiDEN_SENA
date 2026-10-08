const roles = [
  ["01", "Administrador", "Visión global", "Usuarios, configuración y control integral del sistema.", "/admin"],
  ["02", "Supervisor", "Seguimiento", "Coordinación, incidencias y lectura de la operación.", "/supervisor"],
];

export default function Roles() {
  return (
    <section className="aiden-roles" id="roles">
      <div className="aiden-shell">
        <header className="aiden-section-header aiden-section-header-compact">
          <div>
            <p className="aiden-index">ROLES</p>
            <h2>La misma operación.<br /><em>La vista que corresponde.</em></h2>
          </div>
          <p>
            La experiencia cambia según la responsabilidad dentro del vivero,
            sin cargar a cada perfil con el mismo nivel de información.
          </p>
        </header>

        <div className="aiden-role-table">
          {roles.map(([number, role, focus, description, href]) => (
            <a href={href} className="aiden-role-row" key={role}>
              <span className="aiden-role-number">{number}</span>
              <h3>{role}</h3>
              <strong>{focus}</strong>
              <p>{description}</p>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
