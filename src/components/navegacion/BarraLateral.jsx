import {
  LayoutDashboard,
  Package,
  Sprout,
  GitBranch,
  Thermometer,
  ShieldCheck,
  CircleDollarSign,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Leaf,
} from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { useSesion } from "../../hooks/useSesion"

const navItems = [
  { label: "Dashboard", page: "/dashboard-supervisor", icon: <LayoutDashboard size={18} /> },
  { label: "Inventario", page: "/inventario", icon: <Package size={18} /> },
  { label: "Producción", page: "/produccion", icon: <Sprout size={18} /> },
  { label: "Trazabilidad", page: "/trazabilidad", icon: <GitBranch size={18} /> },
  { label: "Ambiental", page: "/ambiental", icon: <Thermometer size={18} /> },
  { label: "Calidad", page: "/calidad", icon: <ShieldCheck size={18} /> },
  { label: "Costos", page: "/costos", icon: <CircleDollarSign size={18} />, notOperario: true },
  { label: "Personal", page: "/personal", icon: <Users size={18} />, notOperario: true },
  { label: "Reportes", page: "/reportes", icon: <BarChart3 size={18} />, notOperario: true },
  { label: "Configuración", page: "/configuracion", icon: <Settings size={18} /> },
]

function getDashboardPath(role) {
  if (role === "admin") return "/dashboard-admin"
  if (role === "operario") return "/dashboard-operario"
  return "/dashboard-supervisor"
}

export default function BarraLateral() {
  const navigate = useNavigate()
  const location = useLocation()
  const sesion = useSesion()
  const role = sesion?.role || "supervisor"
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const dashboardPage = getDashboardPath(role)
  const isDashboardActive = ["/dashboard-admin", "/dashboard-supervisor", "/dashboard-operario"].includes(location.pathname)
  const filteredItems = navItems.filter((item) => !(item.notOperario && role === "operario"))

  return (
    <aside
      style={{
        width: sidebarCollapsed ? 64 : 240,
        minWidth: sidebarCollapsed ? 64 : 240,
        transition: "width 0.2s ease, min-width 0.2s ease",
      }}
      className="flex flex-col bg-white border-r border-[#E5EDE8] h-full relative"
    >
      <section className="flex items-center px-4 py-4 border-b border-[#E5EDE8]" style={{ height: 64, minHeight: 64 }}>
        <section className="flex items-center gap-2">
          <section className="w-8 h-8 bg-aiden-primary rounded-lg flex items-center justify-center">
            <Leaf size={16} className="text-white" />
          </section>
          {!sidebarCollapsed && (
            <span className="font-display font-bold text-aiden-primary text-lg tracking-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>
              AiDEN
            </span>
          )}
        </section>
      </section>

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {filteredItems.map((item) => {
          const isActive = item.label === "Dashboard" ? isDashboardActive : location.pathname === item.page
          return (
            <button
              key={item.page}
              onClick={() => navigate(item.label === "Dashboard" ? dashboardPage : item.page)}
              className={`sidebar-item w-full text-left ${isActive ? "active" : ""}`}
              style={{ justifyContent: sidebarCollapsed ? "center" : "flex-start" }}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <span className="shrink-0">{item.icon}</span>
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          )
        })}
      </nav>

      {!sidebarCollapsed && (
        <section className="px-3 py-4 border-t border-[#E5EDE8]">
          <section className="rounded-lg bg-aiden-light p-3">
            <p className="text-xs font-medium text-aiden-primary mb-1">Rol activo</p>
            <p className="text-xs text-aiden-muted capitalize">{role}</p>
          </section>
        </section>
      )}

      <button
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-white border border-[#E5EDE8] rounded-full flex items-center justify-center shadow-sm hover:bg-aiden-light transition-colors z-10"
        aria-label={sidebarCollapsed ? "Expandir navegación" : "Contraer navegación"}
      >
        {sidebarCollapsed ? <ChevronRight size={12} className="text-aiden-muted" /> : <ChevronLeft size={12} className="text-aiden-muted" />}
      </button>
    </aside>
  )
}
