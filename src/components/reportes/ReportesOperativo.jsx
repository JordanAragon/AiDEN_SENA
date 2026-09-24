import React from "react";

export default function ReportesOperativo() {
  const bars = [
    52, 68, 61, 82, 74, 91, 78, 96, 84, 88, 93, 86,
  ];

  const keyIndicators = [
    "Cumplimiento de producción",
    "Disponibilidad de inventario",
    "Controles de calidad",
    "Actividades ambientales",
  ];

  const indicatorValues = [91, 86, 94, 97];

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-emerald-700">
          ANÁLISIS
        </p>
        <h2 className="text-3xl font-bold">
          Reportes
        </h2>
        <p className="text-slate-500">
          Indicadores visuales para interpretar el rendimiento operativo.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Producción", "1.284", "unidades"],
          ["Eficiencia", "91,4", "%"],
          ["Calidad", "94,2", "%"],
          ["Merma", "3,8", "%"],
        ].map(([label, value, unit]) => (
          <article
            className="rounded-2xl border bg-white p-5"
            key={label}
          >
            <p className="text-sm text-slate-500">
              {label}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {value}
              <small className="ml-1 text-sm font-normal">
                {unit}
              </small>
            </p>

            <div className="mt-4 h-1.5 rounded-full bg-slate-100">
              <div className="h-1.5 w-4/5 rounded-full bg-emerald-500" />
            </div>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border bg-white p-6">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">
              Producción mensual
            </h3>
            <p className="text-sm text-slate-500">
              Comportamiento de los últimos 12 periodos
            </p>
          </div>

          <button className="rounded-lg border px-3 py-2 text-sm">
            Exportar
          </button>
        </div>

        <div className="mt-8 flex h-64 items-end gap-2 sm:gap-3">
          {bars.map((height, index) => (
            <div
              key={index}
              className="group flex-1"
            >
              <div
                className="rounded-t-lg bg-emerald-500 transition-all group-hover:bg-emerald-700"
                style={{ height: height + "%" }}
              />
            </div>
          ))}
        </div>
      </article>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border bg-white p-6">
          <h3 className="font-bold">
            Distribución de calidad
          </h3>

          <div className="mx-auto mt-8 h-40 w-40 rounded-full bg-[conic-gradient(#10b981_0_74%,#f59e0b_74%_94%,#e2e8f0_94%)] p-8">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-2xl font-bold">
              94%
            </div>
          </div>
        </article>

        <article className="rounded-2xl border bg-white p-6">
          <h3 className="font-bold">
            Indicadores clave
          </h3>

          <ul className="mt-5 space-y-4">
            {keyIndicators.map((label, index) => (
              <li
                className="flex justify-between border-b pb-3 text-sm"
                key={label}
              >
                <span>
                  {label}
                </span>
                <b>
                  {indicatorValues[index]}%
                </b>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}
