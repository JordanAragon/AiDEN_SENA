import React, { useState } from "react";

export default function PanelInteligencia() {
  const [active, setActive] = useState("Resumen");

  const tabs = [
    "Resumen",
    "Recomendaciones",
    "Alertas",
  ];

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-emerald-700">
          DECISIONES INTELIGENTES
        </p>
        <h2 className="text-3xl font-bold">
          Panel de Inteligencia
        </h2>
        <p className="text-slate-500">
          Indicadores, alertas y recomendaciones para apoyar al Operario.
        </p>
      </header>

      <nav className="flex gap-2 overflow-auto rounded-2xl border bg-white p-2">
        {tabs.map((tab) => (
          <button
            onClick={() => setActive(tab)}
            className={
              active === tab
                ? "rounded-xl bg-slate-950 px-4 py-2 text-sm text-white"
                : "rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
            }
            key={tab}
          >
            {tab}
          </button>
        ))}
      </nav>

      {active === "Resumen" && (
        <>
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Índice operativo", "91"],
              ["Rendimiento", "+12%"],
              ["Alertas", "3"],
              ["Ahorro estimado", "8,4%"],
            ].map(([label, value]) => (
              <article
                className="rounded-2xl border bg-white p-5"
                key={label}
              >
                <p className="text-sm text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-bold">
                  {value}
                </p>
              </article>
            ))}
          </section>

          <article className="rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-emerald-400 font-semibold">
              RECOMENDACIÓN DEL SISTEMA
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Optimizar el riego durante las próximas jornadas.
            </h3>

            <p className="mt-2 text-slate-300">
              Los indicadores ambientales sugieren ajustar la frecuencia de riego para mantener condiciones estables.
            </p>

            <button className="mt-5 rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-slate-950">
              Ver análisis
            </button>
          </article>
        </>
      )}

      {active === "Recomendaciones" && (
        <section className="grid gap-4 md:grid-cols-2">
          {[
            "Revisar lotes con menor rendimiento",
            "Priorizar insumos con stock bajo",
            "Programar inspección de calidad",
            "Comparar consumo ambiental",
          ].map((recommendation, index) => (
            <article
              className="rounded-2xl border bg-white p-5"
              key={recommendation}
            >
              <span className="text-sm text-emerald-700">
                Recomendación {index + 1}
              </span>

              <h3 className="mt-2 font-bold">
                {recommendation}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Acción sugerida a partir de los indicadores disponibles.
              </p>
            </article>
          ))}
        </section>
      )}

      {active === "Alertas" && (
        <section className="space-y-3">
          {[
            "Stock bajo de insumos",
            "Inspección pendiente en lote A-105",
            "Variación ambiental detectada",
          ].map((alert) => (
            <article
              className="rounded-2xl border bg-white p-5"
              key={alert}
            >
              <b>
                {alert}
              </b>

              <p className="mt-1 text-sm text-slate-500">
                Requiere revisión del Operario.
              </p>
            </article>
          ))}
        </section>
      )}
    </section>
  );
}
