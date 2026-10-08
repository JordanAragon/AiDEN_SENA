import React from "react";

export default function PersonalOperativo() {
  const people = [
    ["María López", "Producción", "Activo"],
    ["Carlos Ruiz", "Inventario", "Activo"],
    ["Laura Gómez", "Calidad", "En pausa"],
  ];

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-emerald-700">
          EQUIPO
        </p>
        <h2 className="text-3xl font-bold">
          Personal operativo
        </h2>
        <p className="text-slate-500">
          Consulta actividades y disponibilidad del equipo.
        </p>
      </header>

      <article className="overflow-hidden rounded-2xl border bg-white">
        <ul className="divide-y">
          {people.map(([name, area, status]) => (
            <li
              className="flex items-center justify-between p-5"
              key={name}
            >
              <div>
                <p className="font-semibold">
                  {name}
                </p>
                <p className="text-sm text-slate-500">
                  {area}
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                {status}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
