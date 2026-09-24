import React, { useState } from "react";

export default function ProduccionOperativo() {
  const [items, setItems] = useState([
    {
      id: 104,
      task: "Trasplante de plántulas",
      status: "En proceso",
    },
    {
      id: 105,
      task: "Preparación de sustrato",
      status: "Pendiente",
    },
  ]);

  function add() {
    setItems([
      ...items,
      {
        id: 100 + items.length + 1,
        task: "Nueva actividad",
        status: "Pendiente",
      },
    ]);
  }

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-700">
            OPERACIÓN
          </p>
          <h2 className="text-3xl font-bold">
            Producción
          </h2>
          <p className="text-slate-500">
            Controla las actividades productivas del vivero.
          </p>
        </div>

        <button
          onClick={add}
          className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white"
        >
          Nueva actividad
        </button>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["En proceso", "8"],
          ["Pendientes", "5"],
          ["Completadas", "32"],
        ].map(([label, value]) => (
          <article
            className="rounded-2xl border bg-white p-5"
            key={label}
          >
            <p className="text-sm text-slate-500">
              {label}
            </p>
            <p className="mt-1 text-3xl font-bold">
              {value}
            </p>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border bg-white p-6">
        <h3 className="font-bold">
          Actividades
        </h3>

        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div
              className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
              key={item.id}
            >
              <div>
                <b>
                  #{item.id}
                </b>
                <span className="ml-3">
                  {item.task}
                </span>
              </div>

              <span className="text-sm text-emerald-700">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
