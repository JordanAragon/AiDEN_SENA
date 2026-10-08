import { useState } from "react"
import { Plus, Search, Sprout, Calendar, User, X, ChevronRight } from "lucide-react"

const lots = [
  { id: "LT-2024-089", species: "Rosa canina (Rosa roja)", family: "Rosaceae", stage: "Floración", stageN: 4, totalStages: 5, sow: "2024-05-12", harvest: "2024-10-20", responsible: "Luis Torres", qty: 200, location: "Invernadero A", status: "active", progress: 85 },
  { id: "LT-2024-091", species: "Begonia bicolor", family: "Begoniaceae", stage: "Trasplante", stageN: 2, totalStages: 4, sow: "2024-07-01", harvest: "2024-12-15", responsible: "Ana Ruiz", qty: 350, location: "Invernadero B", status: "active", progress: 40 },
  { id: "LT-2024-094", species: "Crisantemo amarillo", family: "Asteraceae", stage: "Germinación", stageN: 1, totalStages: 5, sow: "2024-08-10", harvest: "2025-02-28", responsible: "Pedro Vargas", qty: 150, location: "Semillero 1", status: "active", progress: 20 },
  { id: "LT-2024-080", species: "Lirio oriental blanco", family: "Liliaceae", stage: "Cosecha", stageN: 5, totalStages: 5, sow: "2024-02-20", harvest: "2024-08-25", responsible: "Luis Torres", qty: 120, location: "Invernadero C", status: "harvest", progress: 98 },
  { id: "LT-2024-075", species: "Girasol enano", family: "Asteraceae", stage: "Completado", stageN: 5, totalStages: 5, sow: "2024-01-15", harvest: "2024-07-10", responsible: "Ana Ruiz", qty: 400, location: "Campo Abierto 1", status: "completed", progress: 100 },
  { id: "LT-2024-086", species: "Orquídea Phalaenopsis", family: "Orchidaceae", stage: "Crecimiento", stageN: 3, totalStages: 6, sow: "2024-04-05", harvest: "2025-01-30", responsible: "Pedro Vargas", qty: 80, location: "Invernadero B", status: "active", progress: 55 },
]

const stages = ["Germinación", "Siembra", "Trasplante", "Crecimiento", "Floración", "Cosecha"]

export default function Production() {
  const [view, setView] = useState<"cards" | "table">("cards")
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<typeof lots[0] | null>(null)
  const [showAdd, setShowAdd] = useState(false)

  const filtered = lots.filter(l =>
    l.id.toLowerCase().includes(search.toLowerCase()) ||
    l.species.toLowerCase().includes(search.toLowerCase()) ||
    l.responsible.toLowerCase().includes(search.toLowerCase())
  )

  const statusBadge = (s: string) =>
    s === "active" ? "badge-green" : s === "harvest" ? "badge-blue" : "badge-gray"

  const statusLabel = (s: string) =>
    s === "active" ? "Activo" : s === "harvest" ? "En cosecha" : "Completado"

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Producción</h1>
          <p className="text-sm text-aiden-muted mt-1">Gestión de lotes y etapas de cultivo</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="aiden-btn-primary text-sm">
          <Plus size={16} />
          Nuevo Lote
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Lotes Activos", value: String(lots.filter(l => l.status === "active").length), color: "text-aiden-primary", bg: "bg-aiden-light" },
          { label: "En Cosecha", value: String(lots.filter(l => l.status === "harvest").length), color: "text-aiden-info", bg: "bg-aiden-info-bg" },
          { label: "Completados", value: String(lots.filter(l => l.status === "completed").length), color: "text-aiden-success", bg: "bg-aiden-success-bg" },
          { label: "Plantas Totales", value: String(lots.reduce((a, l) => a + l.qty, 0)), color: "text-aiden-secondary", bg: "bg-aiden-light" },
        ].map((k) => (
          <div key={k.label} className="aiden-card p-4">
            <p className={`text-2xl font-bold ${k.color}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{k.value}</p>
            <p className="text-xs text-aiden-muted mt-1">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-aiden-muted" />
          <input
            className="aiden-input pl-9 text-sm"
            placeholder="Buscar lote, especie o responsable..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "0.45rem 0.875rem 0.45rem 2rem" }}
          />
        </div>
        <div className="flex rounded-lg border border-[#E5EDE8] overflow-hidden">
          {(["cards", "table"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${view === v ? "bg-aiden-primary text-white" : "text-aiden-muted hover:bg-aiden-light"}`}
            >
              {v === "cards" ? "Tarjetas" : "Tabla"}
            </button>
          ))}
        </div>
      </div>

      {view === "cards" ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((lot) => (
            <div
              key={lot.id}
              className="aiden-card p-5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all"
              onClick={() => setSelected(lot)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs font-mono font-semibold text-aiden-primary">{lot.id}</p>
                  <p className="text-sm font-semibold text-aiden-text mt-0.5">{lot.species}</p>
                  <p className="text-xs text-aiden-muted italic">{lot.family}</p>
                </div>
                <span className={`badge ${statusBadge(lot.status)} text-[10px]`}>{statusLabel(lot.status)}</span>
              </div>

              <div className="my-4">
                <div className="flex justify-between text-xs text-aiden-muted mb-2">
                  <span>Etapa {lot.stageN}/{lot.totalStages}: <strong className="text-aiden-text">{lot.stage}</strong></span>
                  <span>{lot.progress}%</span>
                </div>
                <div className="w-full bg-[#E5EDE8] rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full transition-all"
                    style={{ width: `${lot.progress}%`, background: lot.status === "completed" ? "#16A34A" : "#0A4F31" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="flex items-center gap-1.5 text-xs text-aiden-muted">
                  <User size={11} />
                  <span className="truncate">{lot.responsible}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-aiden-muted">
                  <Sprout size={11} />
                  <span>{lot.qty} plantas</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-aiden-muted col-span-2">
                  <Calendar size={11} />
                  <span>Cosecha estimada: {lot.harvest}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="aiden-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-aiden-bg border-b border-[#E5EDE8]">
                {["Lote", "Especie", "Etapa", "Progreso", "Responsable", "Cosecha", "Estado"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-aiden-muted uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((lot) => (
                <tr key={lot.id} className="table-row border-b border-[#E5EDE8] last:border-0 cursor-pointer" onClick={() => setSelected(lot)}>
                  <td className="px-4 py-3 text-xs font-mono font-semibold text-aiden-primary">{lot.id}</td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-aiden-text">{lot.species}</p>
                    <p className="text-xs text-aiden-muted italic">{lot.family}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="badge badge-green text-[10px]">{lot.stage}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-24">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-aiden-muted">{lot.progress}%</span>
                      </div>
                      <div className="w-full bg-[#E5EDE8] rounded-full h-1">
                        <div className="bg-aiden-primary h-1 rounded-full" style={{ width: `${lot.progress}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-aiden-muted">{lot.responsible}</td>
                  <td className="px-4 py-3 text-sm text-aiden-muted">{lot.harvest}</td>
                  <td className="px-4 py-3">
                    <span className={`badge text-[10px] ${statusBadge(lot.status)}`}>{statusLabel(lot.status)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail panel */}
      {selected && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-[#E5EDE8] shadow-2xl z-40 overflow-y-auto">
          <div className="p-5 border-b border-[#E5EDE8] flex items-center justify-between">
            <p className="font-semibold text-aiden-text">Detalle del Lote</p>
            <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center">
              <X size={15} className="text-aiden-muted" />
            </button>
          </div>
          <div className="p-5">
            <p className="text-xs font-mono font-semibold text-aiden-primary mb-1">{selected.id}</p>
            <p className="text-lg font-bold text-aiden-text mb-1" style={{ fontFamily: "DM Sans, sans-serif" }}>{selected.species}</p>
            <p className="text-xs text-aiden-muted italic mb-4">{selected.family}</p>

            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Etapas de Cultivo</p>
            <div className="space-y-2 mb-5">
              {stages.slice(0, selected.totalStages).map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${i < selected.stageN ? "bg-aiden-primary" : "bg-[#E5EDE8]"}`} />
                  <span className={`text-sm ${i === selected.stageN - 1 ? "font-semibold text-aiden-primary" : i < selected.stageN ? "text-aiden-text" : "text-aiden-muted"}`}>
                    {s}
                  </span>
                  {i === selected.stageN - 1 && (
                    <span className="badge badge-green text-[10px] ml-auto">Actual</span>
                  )}
                </div>
              ))}
            </div>

            {[
              ["Ubicación", selected.location],
              ["Responsable", selected.responsible],
              ["Cantidad", `${selected.qty} plantas`],
              ["Siembra", selected.sow],
              ["Cosecha Est.", selected.harvest],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between py-2.5 border-b border-[#E5EDE8] last:border-0">
                <span className="text-xs text-aiden-muted">{l}</span>
                <span className="text-xs font-medium text-aiden-text">{v}</span>
              </div>
            ))}

            <div className="flex gap-2 mt-5">
              <button className="aiden-btn-primary flex-1 justify-center text-sm">Editar Lote</button>
              <button className="aiden-btn-secondary text-sm">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {showAdd && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="aiden-card w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="section-title">Nuevo Lote</p>
              <button onClick={() => setShowAdd(false)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
            </div>
            <div className="space-y-4">
              <div><label className="aiden-label">Especie / Cultivo</label><input className="aiden-input" placeholder="Ej. Rosa canina" /></div>
              <div><label className="aiden-label">Familia botánica</label><input className="aiden-input" placeholder="Ej. Rosaceae" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Cantidad</label><input type="number" className="aiden-input" placeholder="0" /></div>
                <div><label className="aiden-label">Ubicación</label><input className="aiden-input" placeholder="Invernadero A" /></div>
              </div>
              <div><label className="aiden-label">Responsable</label><input className="aiden-input" placeholder="Nombre del responsable" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Fecha siembra</label><input type="date" className="aiden-input" /></div>
                <div><label className="aiden-label">Cosecha estimada</label><input type="date" className="aiden-input" /></div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAdd(false)} className="aiden-btn-secondary flex-1 justify-center">Cancelar</button>
              <button onClick={() => setShowAdd(false)} className="aiden-btn-primary flex-1 justify-center">Crear Lote</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
