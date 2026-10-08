const users = [
  ["Laura Méndez", "Supervisor", "Activo"],
  ["Carlos Ruiz", "Supervisor", "Activo"],
  ["Andrés Gómez", "Operario", "Pendiente"],
  ["María López", "Operario", "Activo"],
];

export default function TablaUsuarios() {
  return (
    <section className="dashboard-panel" id="inventario">
      <header className="panel-header">
        <section>
          <p className="panel-label">USUARIOS</p>
          <h2>Personas en el sistema</h2>
        </section>
        <button className="small-button" type="button">Nuevo usuario</button>
      </header>
      <table>
        <thead>
          <tr><th>Nombre</th><th>Rol</th><th>Estado</th></tr>
        </thead>
        <tbody>
          {users.map(([name, role, status]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{role}</td>
              <td>
                <span className={status === "Activo" ? "table-status active" : "table-status pending"}>
                  {status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
