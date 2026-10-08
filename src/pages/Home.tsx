import {
  Leaf,
  BarChart3,
  Package,
  Sprout,
  GitBranch,
  Thermometer,
  ShieldCheck,
  CircleDollarSign,
  Users,
  FileText,
  ArrowRight,
  CheckCircle2,
  Shield,
  Eye,
  Database,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../utilidades/autenticacion"

export default function Landing() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const modules = [
    { icon: <Package size={20} />, name: "Inventario", desc: "Control de stock, entradas y salidas con alertas de mínimos." },
    { icon: <Sprout size={20} />, name: "Producción", desc: "Gestión de lotes, etapas de crecimiento y responsables." },
    { icon: <Thermometer size={20} />, name: "Ambiental", desc: "Monitoreo de sensores, temperatura, humedad y luminosidad." },
    { icon: <ShieldCheck size={20} />, name: "Calidad", desc: "Sistema de incidencias con severidad, estado y seguimiento." },
    { icon: <GitBranch size={20} />, name: "Trazabilidad", desc: "Timeline completo de eventos e historial por lote." },
    { icon: <CircleDollarSign size={20} />, name: "Costos", desc: "Dashboard financiero con centros de costo y gastos por lote." },
    { icon: <Users size={20} />, name: "Personal", desc: "Empleados, roles, tareas asignadas y desempeño operativo." },
    { icon: <FileText size={20} />, name: "Reportes", desc: "Biblioteca de reportes con exportación PDF/Excel y KPIs." },
  ]

  const roles = [
    {
      role: "admin" as const,
      title: "Administrador",
      color: "#0A4F31",
      bg: "#E9F5EF",
      features: ["Gestión de usuarios y roles", "Auditoría completa del sistema", "Configuración avanzada", "Acceso a todos los módulos", "Reportes estratégicos"],
    },
    {
      role: "supervisor" as const,
      title: "Supervisor",
      color: "#157347",
      bg: "#F0FDF4",
      features: ["Dashboard operativo completo", "Gestión de lotes y producción", "Control de inventario", "Monitoreo ambiental", "Incidencias de calidad"],
    },
    {
      role: "operario" as const,
      title: "Operario",
      color: "#2563EB",
      bg: "#EFF6FF",
      features: ["Tareas del día asignadas", "Registro de actividades", "Lotes a cargo", "Incidencias propias", "Producción personal"],
    },
  ]

  return (
    <div className="min-h-full bg-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E5EDE8]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-aiden-primary rounded-lg flex items-center justify-center">
              <Leaf size={16} className="text-white" />
            </div>
            <span className="font-bold text-aiden-primary text-xl tracking-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>
              AiDEN
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Inicio", "¿Qué es?", "Módulos", "Acceso"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-aiden-muted hover:text-aiden-primary transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="aiden-btn-secondary text-sm px-4 py-2"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="aiden-btn-primary text-sm px-4 py-2"
            >
              Registrarse
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-aiden-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-[#E5EDE8] pt-4 space-y-2">
            {["Inicio", "¿Qué es?", "Módulos", "Acceso"].map((item) => (
              <a key={item} href="#" className="block py-2 text-sm text-aiden-muted hover:text-aiden-primary">
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button onClick={() => navigate("/login")} className="aiden-btn-secondary flex-1 justify-center">
                Iniciar Sesión
              </button>
              <button onClick={() => navigate("/signup")} className="aiden-btn-primary flex-1 justify-center">
                Registrarse
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-aiden-bg">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="inline-flex items-center gap-2 bg-aiden-light border border-aiden-border px-3 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-aiden-secondary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-aiden-primary">ERP Vivero Inteligente · v2.0</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1
                className="text-5xl font-bold text-aiden-text leading-[1.1] mb-6"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                AiDEN organiza la{" "}
                <span className="text-aiden-primary">operación diaria</span>{" "}
                del vivero
              </h1>
              <p className="text-lg text-aiden-muted leading-relaxed mb-8 max-w-lg">
                Control integral de lotes, inventario, costos, alertas, personal y trazabilidad.
                Toda la gestión de tu vivero agrícola en una plataforma moderna e inteligente.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <button
                  onClick={() => navigate("/login")}
                  className="aiden-btn-primary px-6 py-3 text-sm"
                >
                  Iniciar Sesión
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => { login("supervisor@aiden.com","aiden123",true); navigate("/dashboard-supervisor") }}
                  className="aiden-btn-secondary px-6 py-3 text-sm"
                >
                  Ver Panel Demo
                </button>
                <button
                  onClick={() => {}}
                  className="px-6 py-3 text-sm font-medium text-aiden-muted hover:text-aiden-primary transition-colors"
                >
                  Explorar Módulos ↓
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "3", label: "Roles Demo" },
                  { value: "9", label: "Módulos Operativos" },
                  { value: "ERP", label: "Vivero Inteligente" },
                ].map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-bold text-aiden-primary" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {m.value}
                    </p>
                    <p className="text-sm text-aiden-muted mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aiden-card overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=500&fit=crop&auto=format"
                  alt="Panel de gestión de vivero AiDEN"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Lotes Activos", value: "48", trend: "+3" },
                    { label: "Inventario", value: "94%", trend: "OK" },
                    { label: "Alertas", value: "2", trend: "↓" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-aiden-bg rounded-xl p-3">
                      <p className="text-xs text-aiden-muted">{kpi.label}</p>
                      <p className="text-xl font-bold text-aiden-text mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        {kpi.value}
                      </p>
                      <span className="text-xs text-aiden-secondary font-medium">{kpi.trend}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-aiden-light rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-aiden-secondary rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Gestión Centralizada */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-aiden-secondary uppercase tracking-widest mb-3">
              Gestión Centralizada
            </p>
            <h2 className="text-3xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Todo lo que necesita tu vivero, en un solo lugar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye size={24} className="text-aiden-primary" />,
                title: "Operación Visible",
                desc: "Monitorea en tiempo real el estado de lotes, inventarios, personal y condiciones ambientales desde un dashboard unificado.",
              },
              {
                icon: <Database size={24} className="text-aiden-secondary" />,
                title: "Recursos Controlados",
                desc: "Gestiona materiales, herramientas, insumos y presupuestos con alertas automáticas de stock mínimo y desvíos de costo.",
              },
              {
                icon: <Shield size={24} className="text-aiden-primary" />,
                title: "Historial Consultable",
                desc: "Trazabilidad completa de cada lote: desde la siembra hasta la venta, con registros de inspecciones, incidencias y actividades.",
              },
            ].map((card) => (
              <div key={card.title} className="aiden-card p-7 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-aiden-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-aiden-text mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {card.title}
                </h3>
                <p className="text-sm text-aiden-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-20 bg-aiden-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-aiden-secondary uppercase tracking-widest mb-3">
              Módulos Operativos
            </p>
            <h2 className="text-3xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              9 módulos diseñados para el vivero
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className="aiden-card p-5 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 bg-aiden-light rounded-lg flex items-center justify-center mb-4 text-aiden-primary group-hover:bg-aiden-primary group-hover:text-white transition-colors">
                  {mod.icon}
                </div>
                <h3 className="font-semibold text-aiden-text mb-2">{mod.name}</h3>
                <p className="text-xs text-aiden-muted leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceso por Rol */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-aiden-secondary uppercase tracking-widest mb-3">
              Acceso por Rol
            </p>
            <h2 className="text-3xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Cada usuario ve lo que necesita
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((r) => (
              <div key={r.title} className="aiden-card p-7 flex flex-col">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: r.bg }}
                >
                  <Shield size={22} style={{ color: r.color }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "DM Sans, sans-serif", color: r.color }}>
                  {r.title}
                </h3>
                <ul className="space-y-2 flex-1 mb-6">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-aiden-muted">
                      <CheckCircle2 size={14} style={{ color: r.color }} className="shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => { login(r.role === "admin" ? "jordanaragon@aiden.com" : r.role === "supervisor" ? "supervisor@aiden.com" : "operario@aiden.com", "aiden123", true); navigate(r.role === "admin" ? "/dashboard-admin" : r.role === "supervisor" ? "/dashboard-supervisor" : "/dashboard-operario") }}
                  className="aiden-btn-secondary justify-center w-full"
                  style={{ borderColor: r.color + "40", color: r.color }}
                >
                  Ver demo como {r.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aiden-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Leaf size={16} className="text-white" />
                </div>
                <span className="font-bold text-xl" style={{ fontFamily: "DM Sans, sans-serif" }}>AiDEN</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Sistema ERP para gestión integral de viveros agrícolas. Inteligente, moderno y preparado para producción.
              </p>
            </div>

            {[
              {
                title: "Plataforma",
                links: ["Inicio", "¿Qué es AiDEN?", "Módulos", "Acceso Demo"],
              },
              {
                title: "Módulos",
                links: ["Inventario", "Producción", "Trazabilidad", "Ambiental", "Calidad"],
              },
              {
                title: "Acceso",
                links: ["Iniciar Sesión", "Registrarse", "Recuperar Contraseña", "Design System"],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-semibold text-sm mb-4 text-white/90">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2024 AiDEN · Artificial Intelligence for Nursery Management
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("design-system")}
                className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-white/80 transition-colors"
              >
                Design System
              </button>
              <button
                onClick={() => navigate("/login")}
                className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-white/80 transition-colors"
              >
                Acceso
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
