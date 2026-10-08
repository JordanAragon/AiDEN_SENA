import { useState } from "react"
import { Search, Plus, Filter, Package, AlertTriangle, TrendingDown, ArrowUpDown, Edit2, Trash2, X } from "lucide-react"

const items = [
  { id: 1, code: "INV-001", name: "Sustrato Premium", cat: "Sustratos", stock: 320, min: 200, unit: "kg", price: 4200, status: "ok" },
  { id: 2, code: "INV-002", name: "Semillas Rosa Canina", cat: "Semillas", stock: 45, min: 100, unit: "g", price: 18500, status: "low" },
  { id: 3, code: "INV-003", name: "Fertilizante NPK 20-20-20", cat: "Fertilizantes", stock: 85, min: 50, unit: "kg", price: 7800, status: "ok" },
  { id: 4, code: "INV-004", name: "Maceta Negra 15cm", cat: "Envases", stock: 1240, min: 500, unit: "u", price: 320, status: "ok" },
  { id: 5, code: "INV-005", name: "Fungicida Captan 50WP", cat: "Agroquímicos", stock: 12, min: 20, unit: "kg", price: 32000, status: "critical" },
  { id: 6, code: "INV-006", name: "Tijeras de Poda Profesional", cat: "Herramientas", stock: 8, min: 5, unit: "u", price: 45000, status: "ok" },
  { id: 7, code: "INV-007", name: "Sustrato Perlita", cat: "Sustratos", stock: 180, min: 100, unit: "kg", price: 5600, status: "ok" },
  { id: 8, code: "INV-008", name: "Semillas Begonia Bicolor", cat: "Semillas", stock: 22, min: 80, unit: "g", price: 24000, status: "critical" },
]

const cats = ["Todos", "Sustratos", "Semillas", "Fertilizantes", "Envases", "Agroquímicos", "Herramientas"]

export default function Inventory() {
  const [search, setSearch] = useState("")
  const [cat, setCat] = useState("Todos")
  const [selected, setSelected] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  const filtered = items.filter((it) => {
    const matchSearch = it.name.toLowerCase().includes(search.toLowerCase()) || it.code.includes(search)
    const matchCat = cat === "Todos" || it.cat === cat
    return matchSearch && matchCat
  })

  const kpis = [
    { label: "Total Artículos", value: String(items.length), icon: <Package size={18} />, bg: "bg-aiden-light", color: "text-aiden-primary" },
    { label: "Stock Bajo Mínimo", value: String(items.filter(i => i.status !== "ok").length), icon: <AlertTriangle size={18} />, bg: "bg-aiden-warning-bg", color: "text-aiden-warning" },
    { label: "Items Críticos", value: String(items.filter(i => i.status === "critical").length), icon: <TrendingDown size={18} />, bg: "bg-aiden-danger-bg", color: "text-aiden-danger" },
    { label: "Valor Inventario", value: "$2.4M", icon: <Package size={18} />, bg: "bg-aiden-info-bg", color: "text-aiden-info" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Inventario</h1>
          <p className="text-sm text-aiden-muted mt-1">Control de stock, entradas y salidas</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="aiden-btn-primary text-sm">
          <Plus size={16} />
          Nuevo Artículo
        </button>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="aiden-card p-4 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${k.bg} ${k.color} shrink-0`}>
              {k.icon}
            </div>
            <div>
              <p className="text-xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{k.value}</p>
              <p className="text-xs text-aiden-muted">{k.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="aiden-card overflow-hidden">
        <div className="p-4 border-b border-[#E5EDE8] flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-aiden-muted" />
            <input
              className="aiden-input pl-9 text-sm"
              placeholder="Buscar artículo o código..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: "0.45rem 0.875rem 0.45rem 2rem" }}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter size={14} className="text-aiden-muted shrink-0" />
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${cat === c ? "bg-aiden-primary text-white" : "bg-aiden-light text-aiden-muted hover:text-aiden-primary"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5EDE8] bg-aiden-bg">
                {["Código", "Artículo", "Categoría", "Stock", "Mínimo", "Unidad", "Precio/u", "Estado", "Acciones"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-aiden-muted uppercase tracking-wide whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      {h}
                      {["Stock", "Precio/u"].includes(h) && <ArrowUpDown size={10} />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="table-row border-b border-[#E5EDE8] last:border-0 cursor-pointer" onClick={() => setSelected(item)}>
                  <td className="px-4 py-3">
                    <span className="text-xs font-mono text-aiden-muted">{item.code}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-aiden-text">{item.name}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="badge badge-gray text-[11px]">{item.cat}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-semibold ${item.status === "critical" ? "text-aiden-danger" : item.status === "low" ? "text-aiden-warning" : "text-aiden-text"}`}>
                      {item.stock.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-aiden-muted">{item.min.toLocaleString()}</td>
                  <td className="px-4 py-3 text-sm text-aiden-muted">{item.unit}</td>
                  <td className="px-4 py-3 text-sm text-aiden-text">${item.price.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`badge text-[11px] ${item.status === "ok" ? "badge-green" : item.status === "low" ? "badge-yellow" : "badge-red"}`}>
                      {item.status === "ok" ? "Normal" : item.status === "low" ? "Bajo" : "Crítico"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                      <button className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center text-aiden-muted hover:text-aiden-primary transition-colors">
                        <Edit2 size={13} />
                      </button>
                      <button className="w-7 h-7 rounded-lg hover:bg-aiden-danger-bg flex items-center justify-center text-aiden-muted hover:text-aiden-danger transition-colors">
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-[#E5EDE8] flex items-center justify-between">
          <p className="text-xs text-aiden-muted">{filtered.length} de {items.length} artículos</p>
          <div className="flex gap-1">
            {[1, 2, 3].map((p) => (
              <button key={p} className={`w-7 h-7 rounded-lg text-xs ${p === 1 ? "bg-aiden-primary text-white" : "text-aiden-muted hover:bg-aiden-light"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-[#E5EDE8] shadow-2xl z-40 overflow-y-auto">
          <div className="p-5 border-b border-[#E5EDE8] flex items-center justify-between">
            <p className="font-semibold text-aiden-text">Detalle del artículo</p>
            <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center">
              <X size={15} className="text-aiden-muted" />
            </button>
          </div>
          <div className="p-5 space-y-5">
            <div>
              <p className="text-xs font-mono text-aiden-muted mb-1">{selected.code}</p>
              <p className="text-xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{selected.name}</p>
              <span className="badge badge-gray text-xs mt-2">{selected.cat}</span>
            </div>
            {[
              ["Stock Actual", `${selected.stock} ${selected.unit}`],
              ["Stock Mínimo", `${selected.min} ${selected.unit}`],
              ["Precio unitario", `$${selected.price.toLocaleString()}`],
              ["Estado", selected.status === "ok" ? "Normal" : selected.status === "low" ? "Bajo mínimo" : "Crítico"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-center py-3 border-b border-[#E5EDE8]">
                <span className="text-sm text-aiden-muted">{l}</span>
                <span className="text-sm font-medium text-aiden-text">{v}</span>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="aiden-btn-primary flex-1 justify-center text-sm">Editar</button>
              <button className="aiden-btn-secondary flex-1 justify-center text-sm">Movimiento</button>
            </div>
          </div>
        </div>
      )}

      {/* Add modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="aiden-card w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="section-title">Nuevo Artículo</p>
              <button onClick={() => setShowAdd(false)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center">
                <X size={15} />
              </button>
            </div>
            <div className="space-y-4">
              <div><label className="aiden-label">Nombre</label><input className="aiden-input" placeholder="Nombre del artículo" /></div>
              <div><label className="aiden-label">Categoría</label>
                <select className="aiden-input">
                  {cats.slice(1).map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Stock inicial</label><input type="number" className="aiden-input" placeholder="0" /></div>
                <div><label className="aiden-label">Mínimo</label><input type="number" className="aiden-input" placeholder="0" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Unidad</label><input className="aiden-input" placeholder="kg, u, g..." /></div>
                <div><label className="aiden-label">Precio/u</label><input type="number" className="aiden-input" placeholder="0" /></div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAdd(false)} className="aiden-btn-secondary flex-1 justify-center">Cancelar</button>
              <button onClick={() => setShowAdd(false)} className="aiden-btn-primary flex-1 justify-center">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
