import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { FileText, Download, Filter, TrendingUp, BarChart3, Sprout, CircleDollarSign } from "lucide-react"
import { useState } from "react"

const reports = [
  { id: "RPT-001", name: "Producción Mensual", desc: "Resumen de lotes, etapas y cosechas del mes.", cat: "Producción", date: "2024-08-01", icon: <Sprout size={18} />, views: 24, color: "bg-aiden-light text-aiden-primary" },
  { id: "RPT-002", name: "Balance de Costos", desc: "Gastos por categoría, lote y período comparativo.", cat: "Finanzas", date: "2024-08-01", icon: <CircleDollarSign size={18} />, views: 18, color: "bg-aiden-info-bg text-aiden-info" },
  { id: "RPT-003", name: "Inventario General", desc: "Stock actual, movimientos y alertas de mínimos.", cat: "Inventario", date: "2024-08-15", icon: <BarChart3 size={18} />, views: 31, color: "bg-aiden-success-bg text-aiden-success" },
  { id: "RPT-004", name: "Incidencias de Calidad", desc: "Registro de incidencias por tipo, severidad y estado.", cat: "Calidad", date: "2024-08-20", icon: <TrendingUp size={18} />, views: 12, color: "bg-aiden-danger-bg text-aiden-danger" },
  { id: "RPT-005", name: "Trazabilidad de Lotes", desc: "Historial completo de eventos por lote y período.", cat: "Trazabilidad", date: "2024-08-10", icon: <FileText size={18} />, views: 9, color: "bg-aiden-warning-bg text-aiden-warning" },
  { id: "RPT-006", name: "Desempeño del Personal", desc: "Productividad, tareas y ratings por empleado.", cat: "Personal", date: "2024-08-25", icon: <BarChart3 size={18} />, views: 15, color: "bg-aiden-light text-aiden-secondary" },
]

const productionTrend = [
  { mes: "Mar", produccion: 38, objetivo: 40 },
  { mes: "Abr", produccion: 42, objetivo: 40 },
  { mes: "May", produccion: 45, objetivo: 42 },
  { mes: "Jun", produccion: 51, objetivo: 45 },
  { mes: "Jul", produccion: 48, objetivo: 48 },
  { mes: "Ago", produccion: 53, objetivo: 50 },
]

const qualityData = [
  { tipo: "Fitosanitaria", value: 8 },
  { tipo: "Nutricional", value: 5 },
  { tipo: "Ambiental", value: 3 },
  { tipo: "Climática", value: 2 },
  { tipo: "Productiva", value: 4 },
]

export default function Reports() {
  const [catFilter, setCatFilter] = useState("Todos")
  const [search, setSearch] = useState("")

  const cats = ["Todos", "Producción", "Finanzas", "Inventario", "Calidad", "Trazabilidad", "Personal"]
  const filtered = reports.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = catFilter === "Todos" || r.cat === catFilter
    return matchSearch && matchCat
  })

  return (
    <section className="space-y-6">
      <section className="flex items-center justify-between">
        <section>
          <h1 className="page-title">Reportes</h1>
          <p className="text-sm text-aiden-muted mt-1">Biblioteca de reportes analíticos y exportación</p>
        </section>
        <button className="aiden-btn-secondary text-sm">
          <Download size={16} />
          Exportar Selección
        </button>
      </section>

      {/* Chart row */}
      <section className="grid lg:grid-cols-2 gap-6">
        <section className="aiden-card p-5">
          <p className="section-title mb-1">Producción vs. Objetivo</p>
          <p className="text-xs text-aiden-muted mb-5">Lotes activos por mes</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={productionTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
              <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }} />
              <Line type="monotone" dataKey="produccion" stroke="#0A4F31" strokeWidth={2} name="Producción" dot={{ fill: "#0A4F31", r: 3 }} />
              <Line type="monotone" dataKey="objetivo" stroke="#C8E0D4" strokeWidth={2} strokeDasharray="4 4" name="Objetivo" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="aiden-card p-5">
          <p className="section-title mb-1">Incidencias por Tipo</p>
          <p className="text-xs text-aiden-muted mb-5">Acumulado agosto 2024</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={qualityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
              <XAxis dataKey="tipo" tick={{ fontSize: 10, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }} />
              <Bar dataKey="value" fill="#157347" radius={[4, 4, 0, 0]} name="Incidencias" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3">
        <section className="relative flex-1 min-w-48">
          <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-aiden-muted" />
          <input className="aiden-input pl-9 text-sm" placeholder="Buscar reporte..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: "0.45rem 0.875rem 0.45rem 2rem" }} />
        </section>
        <section className="flex gap-1 flex-wrap">
          {cats.map(c => (
            <button key={c} onClick={() => setCatFilter(c)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${catFilter === c ? "bg-aiden-primary text-white" : "bg-aiden-light text-aiden-muted hover:text-aiden-primary"}`}>{c}</button>
          ))}
        </section>
      </section>

      <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(r => (
          <section key={r.id} className="aiden-card p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer">
            <section className="flex items-start gap-4 mb-4">
              <section className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${r.color}`}>
                {r.icon}
              </section>
              <section className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-aiden-text">{r.name}</p>
                <span className="badge badge-gray text-[10px] mt-1">{r.cat}</span>
              </section>
            </section>
            <p className="text-xs text-aiden-muted leading-relaxed mb-4">{r.desc}</p>
            <section className="flex items-center justify-between">
              <section className="text-xs text-aiden-muted">
                <span>{r.views} visualizaciones</span>
                <span className="mx-1.5">·</span>
                <span>{r.date}</span>
              </section>
              <section className="flex gap-1">
                <button className="aiden-btn-secondary text-xs px-2.5 py-1.5 gap-1">
                  <Download size={12} />
                  PDF
                </button>
                <button className="aiden-btn-secondary text-xs px-2.5 py-1.5 gap-1">
                  <Download size={12} />
                  Excel
                </button>
              </section>
            </section>
          </section>
        ))}
      </section>
    </section>
  )
}
