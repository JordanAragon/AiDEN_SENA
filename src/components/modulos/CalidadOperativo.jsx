import { useState } from "react"
import { Plus, Search, ShieldCheck, AlertTriangle, Clock, CheckCircle2, X } from "lucide-react"

const incidents = [
  { id: "INC-2024-031", lot, title, type, sev, status, user, date, desc,
  { id: "INC-2024-030", lot, title, type, sev, status, user, date, desc,
  { id: "INC-2024-029", lot, title, type, sev, status, user, date, desc,
  { id: "INC-2024-028", lot, title, type, sev, status, user, date, desc,
  { id: "INC-2024-027", lot, title, type, sev, status, user, date, desc). Se investiga calidad del lote de semillas y temperatura de germinación." },
]

const sevColor= { Alta: "badge-red", Media, Baja= {
  open: { label: "Abierta", badge, icon={12} /> },
  inprogress, badge, icon={12} /> },
  resolved, badge, icon={12} /> },
}

export default function Quality() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selected, setSelected] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  const filtered = incidents.filter(inc => {
    const matchSearch = inc.title.toLowerCase().includes(search.toLowerCase()) || inc.lot.includes(search)
    const matchStatus = statusFilter === "all" || inc.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Calidad</h1>
          <p className="text-sm text-aiden-muted mt-1">Gestión de incidencias y seguimiento</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="aiden-btn-primary text-sm">
          <Plus size={16} />
          Nueva Incidencia
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Incidencias", value), icon={18} />, bg, color,
          { label: "Abiertas", value=> i.status === "open").length), icon={18} />, bg, color,
          { label: "En Proceso", value=> i.status === "inprogress").length), icon={18} />, bg, color,
          { label: "Resueltas", value=> i.status === "resolved").length), icon={18} />, bg, color,
        ].map(k => (
          <div key={k.label} className="aiden-card p-4 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${k.bg} ${k.color} shrink-0`}>{k.icon}</div>
            <div>
              <p className="text-xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{k.value}</p>
              <p className="text-xs text-aiden-muted">{k.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-aiden-muted" />
          <input className="aiden-input pl-9 text-sm" placeholder="Buscar incidencia..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: "0.45rem 0.875rem 0.45rem 2rem" }} />
        </div>
        <div className="flex gap-1">
          {[["all", "Todas"], ["open", "Abiertas"], ["inprogress", "En Proceso"], ["resolved", "Resueltas"]].map(([k, l]) => (
            <button key={k} onClick={() => setStatusFilter(k)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${statusFilter === k ? "bg-aiden-primary text-white" : "bg-aiden-light text-aiden-muted hover:text-aiden-primary"}`}>{l}</button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(inc => {
          const sc = statusConfig[inc.status]
          return (
            <div
              key={inc.id}
              className="aiden-card p-5 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelected(inc)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-xs font-mono text-aiden-muted">{inc.id}</span>
                    <span className="text-xs font-mono text-aiden-primary">{inc.lot}</span>
                    <span className={`badge ${sevColor[inc.sev]} text-[10px]`}>{inc.sev}</span>
                    <span className="badge badge-gray text-[10px]">{inc.type}</span>
                  </div>
                  <p className="text-sm font-semibold text-aiden-text">{inc.title}</p>
                  <p className="text-sm text-aiden-muted mt-1 line-clamp-2">{inc.desc}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-aiden-muted">
                    <span className="font-medium text-aiden-primary">{inc.user}</span>
                    <span>·</span>
                    <span>{inc.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {sc.icon}
                  <span className={`badge ${sc.badge} text-[10px]`}>{sc.label}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail */}
      {selected && (
        <div className="fixed inset-y-0 right-0 w-96 bg-white border-l border-[#E5EDE8] shadow-2xl z-40 overflow-y-auto">
          <div className="p-5 border-b border-[#E5EDE8] flex items-center justify-between">
            <p className="font-semibold text-aiden-text">Detalle de Incidencia</p>
            <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-xs font-mono text-aiden-muted">{selected.id}</span>
                <span className={`badge ${sevColor[selected.sev]} text-[10px]`}>{selected.sev} severidad</span>
              </div>
              <p className="text-lg font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{selected.title}</p>
            </div>
            <div className="p-4 bg-aiden-bg rounded-xl">
              <p className="text-sm text-aiden-muted leading-relaxed">{selected.desc}</p>
            </div>
            {[["Lote", selected.lot], ["Tipo", selected.type], ["Estado", statusConfig[selected.status].label], ["Responsable", selected.user], ["Fecha", selected.date]].map(([l, v]) => (
              <div key={l} className="flex justify-between py-2.5 border-b border-[#E5EDE8] last:border-0">
                <span className="text-xs text-aiden-muted">{l}</span>
                <span className="text-xs font-medium text-aiden-text">{v}</span>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="aiden-btn-primary flex-1 justify-center text-sm">Actualizar Estado</button>
              <button className="aiden-btn-secondary text-sm">Editar</button>
            </div>
          </div>
        </div>
      )}

      {showAdd && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="aiden-card w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="section-title">Nueva Incidencia</p>
              <button onClick={() => setShowAdd(false)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
            </div>
            <div className="space-y-4">
              <div><label className="aiden-label">Lote afectado</label><select className="aiden-input"><option>Seleccionar lote...</option><option>LT-2024-089</option><option>LT-2024-091</option><option>LT-2024-094</option></select></div>
              <div><label className="aiden-label">Título</label><input className="aiden-input" placeholder="Describe brevemente la incidencia" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Tipo</label><select className="aiden-input"><option>Fitosanitaria</option><option>Nutricional</option><option>Ambiental</option><option>Climática</option><option>Productiva</option></select></div>
                <div><label className="aiden-label">Severidad</label><select className="aiden-input"><option>Baja</option><option>Media</option><option>Alta</option></select></div>
              </div>
              <div><label className="aiden-label">Descripción</label><textarea className="aiden-input min-h-20" placeholder="Detalla la incidencia..." /></div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAdd(false)} className="aiden-btn-secondary flex-1 justify-center">Cancelar</button>
              <button onClick={() => setShowAdd(false)} className="aiden-btn-primary flex-1 justify-center">Registrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
