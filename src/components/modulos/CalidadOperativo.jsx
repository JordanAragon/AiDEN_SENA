import React, { useState } from "react";

export default function CalidadOperativo() {
  const [checks, setChecks] = useState([
    ["Lote A-104", "Aprobado"],
    ["Lote A-105", "Pendiente"],
    ["Lote A-106", "Aprobado"],
  ]);

  function add() {
    setChecks([
      ...checks,
      ["Lote A-" + (107 + checks.length), "Pendiente"],
    ]);
  }

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-emerald-700">
          CONTROL DE CALIDAD
        </p>
        <h2 className="text-3xl font-bold">
          Inspecciones
        </h2>
        <p className="text-slate-500">
          Registra y consulta controles de calidad del proceso.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-slate-500">
            Inspecciones
          </p>
          <b className="text-3xl">
            24
          </b>
        </article>

        <article className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-slate-500">
            Aprobación
          </p>
          <b className="text-3xl">
            94%
          </b>
        </article>

        <article className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-slate-500">
            Pendientes
          </p>
          <b className="text-3xl">
            3
          </b>
        </article>
      </section>

      <article className="rounded-2xl border bg-white p-6">
        <div className="flex justify-between">
          <h3 className="font-bold">
            Control reciente
          </h3>

          <button
            onClick={add}
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm text-white"
          >
            Nueva inspección
          </button>
        </div>

        <ul className="mt-5 divide-y">
          {checks.map(([lot, status]) => (
            <li
              key={lot}
              className="flex justify-between py-4"
            >
              <span className="font-medium">
                {lot}
              </span>

              <span
                className={
                  status === "Aprobado"
                    ? "text-emerald-700"
                    : "text-amber-600"
                }
              >
                {status}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
