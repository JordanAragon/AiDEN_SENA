const tasks = [
  ["Revisar humedad del lote V-019", "Hoy", "Prioridad alta"],
  ["Confirmar entrada de sustrato", "Hoy", "Normal"],
  ["Cerrar actividad del lote V-017", "Mañana", "Normal"],
];

export default function ListaTareas() {
  return (
    <article className="dashboard-panel">
      <header className="panel-header">
        <section>
          <p className="panel-label">TAREAS</p>
          <h2>Próximas actividades</h2>
        </section>
      </header>
      <ol className="task-list">
        {tasks.map(([task, date, priority], index) => (
          <li key={task}>
            <span className="task-index">0{index + 1}</span>
            <section>
              <strong>{task}</strong>
              <small>{date} · {priority}</small>
            </section>
          </li>
        ))}
      </ol>
    </article>
  );
}
