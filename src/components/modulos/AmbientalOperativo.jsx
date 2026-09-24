import React from "react";

export default function AmbientalOperativo() {
  const data = [
    ["Temperatura", "24°C", "Óptima"],
    ["Humedad", "68%", "Estable"],
    ["Suelo", "72%", "Adecuado"],
  ];

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-emerald-700">
          MONITOREO AMBIENTAL
        </p>
        <h2 className="text-3xl font-bold">
          Condiciones del vivero
        </h2>
        <p className="text-slate-500">
          Indicadores ambientales para apoyar la operación diaria.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {data.map(([label, value, status]) => (
          <article
            className="rounded-2xl border bg-white p-6"
            key={label}
          >
            <p className="text-sm text-slate-500">
              {label}
            </p>
            <p className="mt-2 text-3xl font-bold">
              {value}
            </p>
            <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              {status}
            </span>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border bg-white p-6">
        <h3 className="font-bold">
          Tendencia ambiental
        </h3>

        <div className="mt-6 flex h-44 items-end gap-2">
          {[38, 55, 48, 65, 72, 62, 80, 74, 88, 70, 82, 90].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-emerald-400"
                style={{ height: height + "%" }}
              />
            )
          )}
        </div>
      </article>
    </section>
  );
}
