import { useState } from "react"
import { User, Shield, Bell, Globe, Database, Key, Eye, EyeOff, Save } from "lucide-react"
import { useSesion } from "../../hooks/useSesion"

const auditLog = [
  { action: "Inicio de sesión exitoso", user: "Carlos Méndez", time: "2024-08-28 08:02", ip: "192.168.1.45" },
  { action: "Modificación de inventario INV-002", user: "Carlos Méndez", time: "2024-08-28 09:15", ip: "192.168.1.45" },
  { action: "Creación de lote LT-2024-094", user: "Ana Ruiz", time: "2024-08-27 10:30", ip: "192.168.1.32" },
  { action: "Exportación de reporte mensual", user: "Carlos Méndez", time: "2024-08-27 16:45", ip: "192.168.1.45" },
  { action: "Cambio de contraseña", user: "Luis Torres", time: "2024-08-26 11:00", ip: "192.168.1.61" },
]

export default function Settings() {
  const [tab, setTab] = useState("profile")
  const [showPass, setShowPass] = useState(false)
  const role = useSesion()?.role || "supervisor"

  const tabs = [
    { id: "profile", label: "Perfil", icon: <User size={16} /> },
    { id: "security", label: "Seguridad", icon: <Shield size={16} /> },
    { id: "notifications", label: "Notificaciones", icon: <Bell size={16} /> },
    { id: "system", label: "Sistema", icon: <Globe size={16} /> },
    ...(role === "admin" ? [{ id: "audit", label: "Auditoría", icon: <Database size={16} /> }] : []),
  ]

  return (
    <section className="space-y-6">
      <section>
        <h1 className="page-title">Configuración</h1>
        <p className="text-sm text-aiden-muted mt-1">Administra tu cuenta y preferencias del sistema</p>
      </section>

      <section className="grid lg:grid-cols-4 gap-6">
        {/* Tab nav */}
        <section className="aiden-card p-3 h-fit">
          <nav className="space-y-1">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`sidebar-item w-full text-left ${tab === t.id ? "active" : ""}`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </nav>
        </section>

        {/* Content */}
        <section className="lg:col-span-3 space-y-5">
          {tab === "profile" && (
            <section className="aiden-card p-6 space-y-5">
              <p className="section-title">Información de Perfil</p>

              <section className="flex items-center gap-5 pb-5 border-b border-[#E5EDE8]">
                <section className="w-16 h-16 bg-aiden-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">CM</section>
                <section>
                  <p className="font-semibold text-aiden-text">Carlos Méndez</p>
                  <p className="text-sm text-aiden-muted">Supervisor · Operaciones</p>
                  <button className="text-xs text-aiden-secondary hover:text-aiden-primary mt-1 font-medium">Cambiar foto</button>
                </section>
              </section>

              <section className="grid md:grid-cols-2 gap-4">
                <section><label className="aiden-label">Nombre</label><input className="aiden-input" defaultValue="Carlos" /></section>
                <section><label className="aiden-label">Apellido</label><input className="aiden-input" defaultValue="Méndez" /></section>
                <section><label className="aiden-label">Correo Electrónico</label><input type="email" className="aiden-input" defaultValue="c.mendez@aiden.co" /></section>
                <section><label className="aiden-label">Teléfono</label><input type="tel" className="aiden-input" defaultValue="+57 300 123 4567" /></section>
                <section><label className="aiden-label">Cargo</label><input className="aiden-input" defaultValue="Supervisor Operaciones" /></section>
                <section><label className="aiden-label">Departamento</label><input className="aiden-input" defaultValue="Operaciones" /></section>
              </section>

              <section><label className="aiden-label">Biografía</label><textarea className="aiden-input min-h-20" defaultValue="Supervisor de operaciones con 5 años de experiencia en gestión de viveros y cultivos ornamentales." /></section>

              <section className="flex justify-end">
                <button className="aiden-btn-primary text-sm"><Save size={15} />Guardar cambios</button>
              </section>
            </section>
          )}

          {tab === "security" && (
            <section className="space-y-5">
              <section className="aiden-card p-6 space-y-4">
                <p className="section-title">Cambiar Contraseña</p>
                <section><label className="aiden-label">Contraseña actual</label>
                  <section className="relative">
                    <input type={showPass ? "text" : "password"} className="aiden-input pr-10" placeholder="••••••••" />
                    <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-aiden-muted hover:text-aiden-primary">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </section>
                </section>
                <section><label className="aiden-label">Nueva contraseña</label><input type="password" className="aiden-input" placeholder="Mínimo 8 caracteres" /></section>
                <section><label className="aiden-label">Confirmar nueva contraseña</label><input type="password" className="aiden-input" placeholder="Repite la nueva contraseña" /></section>
                <section className="flex justify-end">
                  <button className="aiden-btn-primary text-sm"><Key size={15} />Actualizar contraseña</button>
                </section>
              </section>

              <section className="aiden-card p-6">
                <p className="section-title mb-4">Autenticación de Dos Factores</p>
                <section className="flex items-center justify-between p-4 bg-aiden-bg rounded-xl">
                  <section>
                    <p className="text-sm font-medium text-aiden-text">Autenticación 2FA</p>
                    <p className="text-xs text-aiden-muted mt-0.5">Protege tu cuenta con una capa adicional de seguridad</p>
                  </section>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <section className="w-10 h-5 bg-[#E5EDE8] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-aiden-primary" />
                  </label>
                </section>
              </section>
            </section>
          )}

          {tab === "notifications" && (
            <section className="aiden-card p-6 space-y-4">
              <p className="section-title">Preferencias de Notificaciones</p>
              {[
                { label: "Alertas ambientales", desc: "Temperatura, humedad y luminosidad fuera de rango", enabled: true },
                { label: "Stock bajo mínimo", desc: "Cuando un artículo baja del stock mínimo configurado", enabled: true },
                { label: "Incidencias de calidad", desc: "Nuevas incidencias registradas en el sistema", enabled: true },
                { label: "Actualizaciones de lotes", desc: "Cambios de etapa y eventos en lotes asignados", enabled: false },
                { label: "Reportes automáticos", desc: "Resumen semanal y mensual de operaciones", enabled: true },
                { label: "Nuevos usuarios", desc: "Cuando se registra un nuevo usuario en el sistema", enabled: false },
              ].map((n, i) => (
                <section key={i} className="flex items-center justify-between p-4 bg-aiden-bg rounded-xl">
                  <section>
                    <p className="text-sm font-medium text-aiden-text">{n.label}</p>
                    <p className="text-xs text-aiden-muted mt-0.5">{n.desc}</p>
                  </section>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={n.enabled} />
                    <section className="w-10 h-5 bg-[#E5EDE8] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-aiden-primary" />
                  </label>
                </section>
              ))}
            </section>
          )}

          {tab === "system" && (
            <section className="aiden-card p-6 space-y-5">
              <p className="section-title">Parámetros del Sistema</p>
              <section className="grid md:grid-cols-2 gap-4">
                <section><label className="aiden-label">Nombre del vivero</label><input className="aiden-input" defaultValue="Vivero Las Palmas S.A.S." /></section>
                <section><label className="aiden-label">NIT / RUT</label><input className="aiden-input" defaultValue="900.123.456-7" /></section>
                <section><label className="aiden-label">Zona horaria</label><select className="aiden-input"><option>América/Bogotá (UTC-5)</option></select></section>
                <section><label className="aiden-label">Idioma</label><select className="aiden-input"><option>Español (Colombia)</option></select></section>
                <section><label className="aiden-label">Moneda</label><select className="aiden-input"><option>COP - Peso Colombiano</option></select></section>
                <section><label className="aiden-label">Formato de fecha</label><select className="aiden-input"><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option></select></section>
              </section>
              <section>
                <label className="aiden-label">Dirección del vivero</label>
                <input className="aiden-input" defaultValue="Km 12 Vía Mosquera, Cundinamarca, Colombia" />
              </section>
              <section className="flex justify-end">
                <button className="aiden-btn-primary text-sm"><Save size={15} />Guardar configuración</button>
              </section>
            </section>
          )}

          {tab === "audit" && role === "admin" && (
            <section className="aiden-card overflow-hidden">
              <section className="p-4 border-b border-[#E5EDE8]">
                <p className="section-title">Registro de Auditoría</p>
                <p className="text-xs text-aiden-muted mt-0.5">Acciones registradas en el sistema</p>
              </section>
              <table className="w-full">
                <thead>
                  <tr className="bg-aiden-bg border-b border-[#E5EDE8]">
                    {["Acción", "Usuario", "Fecha/Hora", "IP"].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-aiden-muted uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {auditLog.map((log, i) => (
                    <tr key={i} className="table-row border-b border-[#E5EDE8] last:border-0">
                      <td className="px-4 py-3 text-sm text-aiden-text">{log.action}</td>
                      <td className="px-4 py-3 text-sm font-medium text-aiden-primary">{log.user}</td>
                      <td className="px-4 py-3 text-xs text-aiden-muted">{log.time}</td>
                      <td className="px-4 py-3 text-xs font-mono text-aiden-muted">{log.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </section>
      </section>
    </section>
  )
}
