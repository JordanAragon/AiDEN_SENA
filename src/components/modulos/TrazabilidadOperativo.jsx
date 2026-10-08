import { useState } from "react"
import { Search, GitBranch, CheckCircle2, AlertTriangle, Thermometer, Droplets, Scissors, FlaskConical, Sprout } from "lucide-react"

const lots = ["LT-2024-089", "LT-2024-091", "LT-2024-094", "LT-2024-080", "LT-2024-086"]

const events= {
  "LT-2024-089": [
    { date: "2024-08-28", time, type, title, desc, user, icon={14} /> },
    { date: "2024-08-25", time, type, title, desc, user, icon={14} /> },
    { date: "2024-08-20", time, type, title, desc, user, icon={14} /> },
    { date: "2024-08-15", time, type, title, desc, user, icon={14} /> },
    { date: "2024-07-30", time, type, title, desc, user, icon={14} /> },
    { date: "2024-07-10", time, type, title, desc, user, icon={14} /> },
    { date: "2024-06-01", time, type, title, desc, user, icon={14} /> },
    { date: "2024-05-12", time, type, title, desc).", user, icon={14} /> },
  ],
}

const typeConfig= {
  quality: { color: "#DC2626", bg, label,
  activity, bg, label,
  inspection, bg, label,
  environment, bg, label,
  stage, bg, label,
}

export default function Traceability() {
  const [selectedLot, setSelectedLot] = useState("LT-2024-089")
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  const timeline = events[selectedLot] || []
  const filtered = timeline.filter(ev => {
    const matchSearch = ev.title.toLowerCase().includes(search.toLowerCase()) || ev.desc.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === "all" || ev.type === typeFilter
    return matchSearch && matchType
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Trazabilidad</h1>
        <p className="text-sm text-aiden-muted mt-1">Historial completo de eventos por lote</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Lot selector */}
        <div className="aiden-card p-4 lg:col-span-1 h-fit">
          <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Lotes</p>
          <div className="space-y-1">
            {lots.map((lot) => (
              <button
                key={lot}
                onClick={() => setSelectedLot(lot)}
                className={`sidebar-item w-full text-left text-sm ${selectedLot === lot ? "active" : ""}`}
              >
                <GitBranch size={14} />
                {lot}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-3 space-y-4">
          <div className="aiden-card p-4 flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-40">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-aiden-muted" />
              <input
                className="aiden-input pl-9 text-sm"
                placeholder="Buscar en historial..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: "0.4rem 0.75rem 0.4rem 2rem" }}
              />
            </div>
            <div className="flex gap-1 flex-wrap">
              {[["all", "Todos"], ...Object.entries(typeConfig).map(([k, v]) => [k, v.label])].map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setTypeFilter(k)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${typeFilter === k ? "bg-aiden-primary text-white" : "bg-aiden-light text-aiden-muted hover:text-aiden-primary"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="aiden-card p-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="section-title">{selectedLot}</p>
                <p className="text-xs text-aiden-muted mt-0.5">{filtered.length} eventos registrados</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E5EDE8]" />
              <div className="space-y-0">
                {filtered.map((ev, i) => {
                  const cfg = typeConfig[ev.type]
                  return (
                    <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                      <div
                        className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: cfg.bg, color="flex-1 min-w-0">
                        <div className="flex items-start gap-2 flex-wrap mb-1">
                          <p className="text-sm font-semibold text-aiden-text">{ev.title}</p>
                          <span className="badge text-[10px]" style={{ background: cfg.bg, color="text-sm text-aiden-muted leading-relaxed mb-2">{ev.desc}</p>
                        <div className="flex items-center gap-3 text-xs text-aiden-muted">
                          <span className="font-medium text-aiden-primary">{ev.user}</span>
                          <span>·</span>
                          <span>{ev.date}</span>
                          <span>·</span>
                          <span>{ev.time}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-aiden-muted">
                <GitBranch size={32} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">No se encontraron eventos</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
