import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  Sprout,
  Package,
  AlertTriangle,
  TrendingUp,
  Activity,
  Clock,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const productionData = [
  { mes: "Mar", lotes: 38, cosecha: 24 },
  { mes: "Abr", lotes: 42, cosecha: 31 },
  { mes: "May", lotes: 45, cosecha: 37 },
  { mes: "Jun", lotes: 51, cosecha: 40 },
  { mes: "Jul", lotes: 48, cosecha: 43 },
  { mes: "Ago", lotes: 53, cosecha: 46 },
]

const inventoryData = [
  { cat: "Sustrato", stock: 87 },
  { cat: "Semillas", stock: 62 },
  { cat: "Fertiliz.", stock: 45 },
  { cat: "Macetas", stock: 91 },
  { cat: "Herram.", stock: 78 },
]

const activities = [
  { time: "08:15", user: "Luis Torres", action: "Registró siembra en lote LT-2024-091", type: "success" },
  { time: "09:30", user: "Ana Ruiz", action: "Alerta: temperatura alta en Invernadero 2", type: "warning" },
  { time: "10:45", user: "Pedro Vargas", action: "Actualización de stock: Sustrato Premium", type: "info" },
  { time: "11:20", user: "Sistema", action: "Lote LT-2024-078 completó etapa de germinación", type: "success" },
  { time: "12:05", user: "Ana Ruiz", action: "Incidencia de calidad registrada en rosa roja", type: "danger" },
]

const alerts = [
  { msg: "Temperatura elevada · Invernadero 2 (32°C)", sev: "Alta", color: "badge-red" },
  { msg: "Stock bajo · Sustrato Premium (15% del mínimo)", sev: "Media", color: "badge-yellow" },
]

export default function DashboardSupervisor() {
  const navigate = useNavigate()

  const kpis = [
    { label: "Lotes Activos", value: "48", change: "+3 esta semana", icon: <Sprout size={20} />, color: "text-aiden-primary", bg: "bg-aiden-light" },
    { label: "Inventario Disponible", value: "94%", change: "2 items bajo mínimo", icon: <Package size={20} />, color: "text-aiden-secondary", bg: "bg-[#E9F5EF]" },
    { label: "Producción Mensual", value: "1,240", change: "+8% vs. mes anterior", icon: <TrendingUp size={20} />, color: "text-aiden-info", bg: "bg-aiden-info-bg" },
    { label: "Alertas Pendientes", value: "2", change: "1 crítica, 1 media", icon: <AlertTriangle size={20} />, color: "text-aiden-danger", bg: "bg-aiden-danger-bg" },
  ]

  return (
    <section className="space-y-6">
      <section className="flex items-center justify-between">
        <section>
          <h1 className="page-title">Dashboard · Supervisor</h1>
          <p className="text-sm text-aiden-muted mt-1">Jueves 28 de agosto, 2026 · Turno mañana</p>
        </section>
        <button onClick={() => navigate("/reportes")} className="aiden-btn-secondary text-sm">
          <Activity size={15} />
          Ver Reportes
        </button>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <section key={kpi.label} className="aiden-card p-5">
            <section className="flex items-start justify-between mb-4">
              <section className={`w-10 h-10 rounded-xl flex items-center justify-center ${kpi.bg} ${kpi.color}`}>
                {kpi.icon}
              </section>
            </section>
            <p className="text-2xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {kpi.value}
            </p>
            <p className="text-sm text-aiden-muted mt-0.5">{kpi.label}</p>
            <p className="text-xs text-aiden-muted mt-2 border-t border-[#E5EDE8] pt-2">{kpi.change}</p>
          </section>
        ))}
      </section>

      {/* Charts row */}
      <section className="grid lg:grid-cols-3 gap-6">
        <section className="aiden-card p-5 lg:col-span-2">
          <section className="flex items-center justify-between mb-5">
            <section>
              <p className="section-title">Producción Mensual</p>
              <p className="text-xs text-aiden-muted mt-0.5">Lotes activos vs. cosechas realizadas</p>
            </section>
          </section>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={productionData}>
              <defs>
                <linearGradient id="gLotes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0A4F31" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#0A4F31" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gCosecha" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#157347" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#157347" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
              <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }}
              />
              <Area type="monotone" dataKey="lotes" stroke="#0A4F31" strokeWidth={2} fill="url(#gLotes)" name="Lotes" />
              <Area type="monotone" dataKey="cosecha" stroke="#157347" strokeWidth={2} fill="url(#gCosecha)" name="Cosechas" />
            </AreaChart>
          </ResponsiveContainer>
        </section>

        <section className="aiden-card p-5">
          <p className="section-title mb-1">Stock por Categoría</p>
          <p className="text-xs text-aiden-muted mb-5">Porcentaje disponible</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={inventoryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: "#61716A" }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <YAxis dataKey="cat" type="category" tick={{ fontSize: 11, fill: "#61716A" }} axisLine={false} tickLine={false} width={60} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }} formatter={(v) => [`${v}%`, "Stock"]} />
              <Bar dataKey="stock" fill="#0A4F31" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </section>

      {/* Activities + Alerts */}
      <section className="grid lg:grid-cols-3 gap-6">
        <section className="aiden-card p-5 lg:col-span-2">
          <p className="section-title mb-5">Actividades Recientes</p>
          <section className="space-y-0">
            {activities.map((act, i) => (
              <section key={i} className="flex gap-4 py-3 border-b border-[#E5EDE8] last:border-0 group">
                <section className="flex flex-col items-center">
                  <section
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{
                      background:
                        act.type === "success" ? "#16A34A"
                          : act.type === "warning" ? "#D97706"
                          : act.type === "danger" ? "#DC2626"
                          : "#2563EB",
                    }}
                  />
                  {i < activities.length - 1 && <section className="w-px flex-1 bg-[#E5EDE8] mt-1" />}
                </section>
                <section className="flex-1 min-w-0">
                  <p className="text-sm text-aiden-text">{act.action}</p>
                  <section className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-aiden-muted font-medium">{act.user}</span>
                    <span className="flex items-center gap-1 text-xs text-aiden-muted">
                      <Clock size={11} />
                      {act.time}
                    </span>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>

        <section className="aiden-card p-5">
          <p className="section-title mb-5">Alertas Activas</p>
          <section className="space-y-3">
            {alerts.map((a, i) => (
              <section key={i} className="p-4 rounded-xl bg-aiden-bg border border-[#E5EDE8]">
                <section className="flex items-start justify-between gap-2 mb-2">
                  <AlertTriangle size={15} className="text-aiden-warning shrink-0 mt-0.5" />
                  <span className={`badge ${a.color} ml-auto`}>{a.sev}</span>
                </section>
                <p className="text-sm text-aiden-text leading-snug">{a.msg}</p>
              </section>
            ))}
            <button
              onClick={() => navigate("/calidad")}
              className="aiden-btn-secondary w-full justify-center text-xs mt-2"
            >
              Ver todas las alertas
            </button>
          </section>
        </section>
      </section>
    </section>
  )
}
