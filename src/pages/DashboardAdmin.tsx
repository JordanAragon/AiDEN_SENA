import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import {
  Users,
  Shield,
  Activity,
  AlertTriangle,
  Sprout,
  TrendingUp,
  Settings,
  Eye,
  UserCheck,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const revenueData = [
  { mes: "Mar", ingresos: 84000, costos: 52000 },
  { mes: "Abr", ingresos: 91000, costos: 58000 },
  { mes: "May", ingresos: 88000, costos: 54000 },
  { mes: "Jun", ingresos: 102000, costos: 61000 },
  { mes: "Jul", ingresos: 97000, costos: 59000 },
  { mes: "Ago", ingresos: 115000, costos: 68000 },
]

const roleData = [
  { name: "Supervisores", value: 5, color: "#0A4F31" },
  { name: "Operarios", value: 18, color: "#157347" },
  { name: "Admins", value: 2, color: "#E9F5EF" },
]

const auditLog = [
  { user: "Ana García", action: "Modificó rol de Carlos Méndez → Supervisor", time: "hace 12 min" },
  { user: "Sistema", action: "Backup automático completado exitosamente", time: "hace 1 h" },
  { user: "Ana García", action: "Creó usuario: Valentina Soto (Operaria)", time: "hace 2 h" },
  { user: "Carlos Méndez", action: "Exportó reporte mensual de producción", time: "hace 3 h" },
  { user: "Sistema", action: "Alerta de temperatura resuelta automáticamente", time: "hace 5 h" },
]

const moduleUsage = [
  { mod: "Producción", uso: 92 },
  { mod: "Inventario", uso: 85 },
  { mod: "Ambiental", uso: 71 },
  { mod: "Calidad", uso: 63 },
  { mod: "Personal", uso: 55 },
  { mod: "Costos", uso: 48 },
]

export default function DashboardAdmin() {
  const navigate = useNavigate()

  const kpis = [
    { label: "Usuarios Activos", value: "25", change: "+2 este mes", icon: <Users size={20} />, color: "text-aiden-primary", bg: "bg-aiden-light" },
    { label: "Lotes en Sistema", value: "48", change: "94% con trazabilidad", icon: <Sprout size={20} />, color: "text-aiden-secondary", bg: "bg-[#E9F5EF]" },
    { label: "Ingresos del Mes", value: "$115K", change: "+18.5% vs. anterior", icon: <TrendingUp size={20} />, color: "text-aiden-info", bg: "bg-aiden-info-bg" },
    { label: "Alertas Sistema", value: "2", change: "Revisión requerida", icon: <AlertTriangle size={20} />, color: "text-aiden-danger", bg: "bg-aiden-danger-bg" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Dashboard · Administrador</h1>
          <p className="text-sm text-aiden-muted mt-1">Vista general del sistema AiDEN · Agosto 2026</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => navigate("/configuracion")} className="aiden-btn-secondary text-sm">
            <Settings size={15} />
            Configuración
          </button>
          <button onClick={() => navigate("/reportes")} className="aiden-btn-primary text-sm">
            <Activity size={15} />
            Reportes
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="aiden-card p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${kpi.bg} ${kpi.color}`}>
              {kpi.icon}
            </div>
            <p className="text-2xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {kpi.value}
            </p>
            <p className="text-sm text-aiden-muted mt-0.5">{kpi.label}</p>
            <p className="text-xs text-aiden-muted mt-2 border-t border-[#E5EDE8] pt-2">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="aiden-card p-5 lg:col-span-2">
          <p className="section-title mb-1">Ingresos vs. Costos</p>
          <p className="text-xs text-aiden-muted mb-5">Últimos 6 meses (COP)</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="gIng" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0A4F31" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#0A4F31" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gCos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
              <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#61716A" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }}
                formatter={(v: unknown) => [`$${((v as number) / 1000).toFixed(0)}K`]}
              />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
              <Area type="monotone" dataKey="ingresos" stroke="#0A4F31" strokeWidth={2} fill="url(#gIng)" name="Ingresos" />
              <Area type="monotone" dataKey="costos" stroke="#DC2626" strokeWidth={2} fill="url(#gCos)" name="Costos" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="aiden-card p-5">
          <p className="section-title mb-1">Usuarios por Rol</p>
          <p className="text-xs text-aiden-muted mb-4">25 usuarios totales</p>
          <div className="flex justify-center">
            <PieChart width={160} height={160}>
              <Pie data={roleData} cx={75} cy={75} innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                {roleData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }} />
            </PieChart>
          </div>
          <div className="space-y-2 mt-2">
            {roleData.map((r) => (
              <div key={r.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color === "#E9F5EF" ? "#0A4F31" : r.color, border: r.color === "#E9F5EF" ? "1px solid #C8E0D4" : "none" }} />
                  <span className="text-aiden-muted text-xs">{r.name}</span>
                </div>
                <span className="font-medium text-aiden-text text-xs">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audit + Module Usage */}
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="aiden-card p-5 lg:col-span-3">
          <div className="flex items-center gap-2 mb-5">
            <Shield size={16} className="text-aiden-primary" />
            <p className="section-title">Registro de Auditoría</p>
          </div>
          <div className="space-y-0">
            {auditLog.map((log, i) => (
              <div key={i} className="flex gap-3 py-3 border-b border-[#E5EDE8] last:border-0">
                <div className="w-7 h-7 rounded-full bg-aiden-light flex items-center justify-center shrink-0">
                  <UserCheck size={13} className="text-aiden-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-aiden-text">{log.action}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs font-medium text-aiden-primary">{log.user}</span>
                    <span className="text-xs text-aiden-muted">{log.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("/configuracion")} className="aiden-btn-secondary w-full justify-center text-xs mt-4">
            <Eye size={13} />
            Ver auditoría completa
          </button>
        </div>

        <div className="aiden-card p-5 lg:col-span-2">
          <p className="section-title mb-1">Uso de Módulos</p>
          <p className="text-xs text-aiden-muted mb-5">Actividad relativa este mes</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={moduleUsage} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: "#61716A" }} axisLine={false} tickLine={false} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <YAxis dataKey="mod" type="category" tick={{ fontSize: 10, fill: "#61716A" }} axisLine={false} tickLine={false} width={65} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 11 }} formatter={(v) => [`${v}%`, "Uso"]} />
              <Bar dataKey="uso" fill="#157347" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
