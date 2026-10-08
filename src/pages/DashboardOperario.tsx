import { CheckCircle2, Clock, AlertTriangle, Sprout, ListChecks, Circle } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const tasks = [
  { id: 1, title: "Riego matutino · Invernadero A (Zona 1-3)", priority: "Alta", done: false, time: "08:00" },
  { id: 2, title: "Aplicar fungicida en lote LT-2024-089", priority: "Alta", done: true, time: "09:30" },
  { id: 3, title: "Trasplante de begonias · 40 unidades", priority: "Media", done: false, time: "10:00" },
  { id: 4, title: "Registro ambiental de tarde · Sensores 1-4", priority: "Baja", done: false, time: "15:00" },
  { id: 5, title: "Limpieza de herramientas y bodega", priority: "Baja", done: true, time: "16:30" },
]

const myLots = [
  { code: "LT-2024-089", species: "Rosa roja (Rosa canina)", stage: "Floración", progress: 85 },
  { code: "LT-2024-091", species: "Begonia bicolor", stage: "Trasplante", progress: 40 },
  { code: "LT-2024-094", species: "Crisantemo amarillo", stage: "Germinación", progress: 20 },
]

export default function DashboardOperario() {
  const navigate = useNavigate()
  const [tasksDone, setTasksDone] = useState(tasks.map((t) => t.done))

  const completed = tasksDone.filter(Boolean).length
  const pct = Math.round((completed / tasks.length) * 100)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Mi Panel · Operario</h1>
        <p className="text-sm text-aiden-muted mt-1">Jueves 28 de agosto, 2026 · Hola, Luis Torres</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Tareas del Día", value: `${completed}/${tasks.length}`, icon: <ListChecks size={18} />, bg: "bg-aiden-light", color: "text-aiden-primary" },
          { label: "Lotes a Cargo", value: "3", icon: <Sprout size={18} />, bg: "bg-aiden-light", color: "text-aiden-secondary" },
          { label: "Pendientes", value: String(tasks.length - completed), icon: <Clock size={18} />, bg: "bg-aiden-warning-bg", color: "text-aiden-warning" },
          { label: "Incidencias", value: "1", icon: <AlertTriangle size={18} />, bg: "bg-aiden-danger-bg", color: "text-aiden-danger" },
        ].map((kpi) => (
          <div key={kpi.label} className="aiden-card p-5">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${kpi.bg} ${kpi.color}`}>
              {kpi.icon}
            </div>
            <p className="text-2xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {kpi.value}
            </p>
            <p className="text-xs text-aiden-muted mt-1">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Tasks */}
        <div className="aiden-card p-5 lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <p className="section-title">Tareas de Hoy</p>
            <span className="badge badge-green">{pct}% completado</span>
          </div>

          <div className="w-full bg-[#E5EDE8] rounded-full h-1.5 mb-5">
            <div
              className="bg-aiden-primary h-1.5 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="space-y-0">
            {tasks.map((task, i) => (
              <div
                key={task.id}
                className="flex items-start gap-3 py-3.5 border-b border-[#E5EDE8] last:border-0 cursor-pointer group"
                onClick={() => {
                  const next = [...tasksDone]
                  next[i] = !next[i]
                  setTasksDone(next)
                }}
              >
                <div className="mt-0.5 shrink-0">
                  {tasksDone[i] ? (
                    <CheckCircle2 size={18} className="text-aiden-success" />
                  ) : (
                    <Circle size={18} className="text-[#C8E0D4] group-hover:text-aiden-secondary transition-colors" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${tasksDone[i] ? "line-through text-aiden-muted" : "text-aiden-text"}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-aiden-muted">
                      <Clock size={10} />
                      {task.time}
                    </span>
                    <span
                      className={`badge text-[10px] ${task.priority === "Alta" ? "badge-red" : task.priority === "Media" ? "badge-yellow" : "badge-gray"}`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Lots */}
        <div className="aiden-card p-5 lg:col-span-2">
          <p className="section-title mb-5">Mis Lotes</p>
          <div className="space-y-4">
            {myLots.map((lot) => (
              <div key={lot.code} className="p-4 rounded-xl bg-aiden-bg border border-[#E5EDE8]">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs font-mono font-semibold text-aiden-primary">{lot.code}</p>
                    <p className="text-sm text-aiden-text mt-0.5">{lot.species}</p>
                  </div>
                  <span className="badge badge-green text-[10px]">{lot.stage}</span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-aiden-muted mb-1">
                    <span>Progreso</span>
                    <span>{lot.progress}%</span>
                  </div>
                  <div className="w-full bg-[#E5EDE8] rounded-full h-1.5">
                    <div
                      className="bg-aiden-primary h-1.5 rounded-full transition-all"
                      style={{ width: `${lot.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/produccion")}
            className="aiden-btn-secondary w-full justify-center text-xs mt-4"
          >
            Ver todos los lotes
          </button>
        </div>
      </div>

      {/* Incident */}
      <div className="aiden-card p-5 border-l-4" style={{ borderLeftColor: "#D97706" }}>
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-aiden-warning shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-aiden-text mb-1">Incidencia abierta · Calidad</p>
            <p className="text-sm text-aiden-muted">
              Presencia de hongos detectada en lote LT-2024-089 (Rosa canina). Registrada hoy a las 10:15. Estado: <strong>En revisión</strong>.
            </p>
            <button onClick={() => navigate("/calidad")} className="text-xs text-aiden-secondary hover:text-aiden-primary font-medium mt-2 transition-colors">
              Ver incidencia →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
