const roles = [
  ["Administrador", "Gestiona usuarios, configuración y visión general.", "/admin"],
  ["Supervisor", "Supervisa la operación y revisa alertas.", "/supervisor"],
];

export default function Roles() {
  return (
    <section className="section section-dark" id="roles" aria-labelledby="roles-title">
      <section className="container">
        <header className="section-heading dark-heading">
          <p className="section-index">03 / ROLES</p>
          <h2 id="roles-title">La misma operación. <em>Dos formas de verla.</em></h2>
          <p>
            El acceso cambia según la responsabilidad de cada persona dentro del vivero.
          </p>
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
  );
}
