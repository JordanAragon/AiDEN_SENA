import { useState } from "react"
import { User, Shield, Bell, Globe, Database, Key, Eye, EyeOff, Save } from "lucide-react"
import { useSesion } from "../../hooks/useSesion"



const auditLog = [
  { action: "Inicio de sesión exitoso", user, time, ip,
  { action: "Modificación de inventario INV-002", user, time, ip,
  { action: "Creación de lote LT-2024-094", user, time, ip,
  { action: "Exportación de reporte mensual", user, time, ip,
  { action: "Cambio de contraseña", user, time, ip,
]

export default function Settings() {
  const [tab, setTab] = useState("profile")
  const [showPass, setShowPass] = useState(false)
  const role = useSesion()?.role || "supervisor"

  const tabs= [
    { id: "profile", label, icon={16} /> },
    { id: "security", label, icon={16} /> },
    { id: "notifications", label, icon={16} /> },
    { id: "system", label, icon={16} /> },
    ...(role === "admin" ? [{ id: "audit" , label, icon={16} /> }] : []),
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Configuración</h1>
        <p className="text-sm text-aiden-muted mt-1">Administra tu cuenta y preferencias del sistema</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Tab nav */}
        <div className="aiden-card p-3 h-fit">
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
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-5">
          {tab === "profile" && (
            <div className="aiden-card p-6 space-y-5">
              <p className="section-title">Información de Perfil</p>

              <div className="flex items-center gap-5 pb-5 border-b border-[#E5EDE8]">
                <div className="w-16 h-16 bg-aiden-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">CM</div>
                <div>
                  <p className="font-semibold text-aiden-text">Carlos Méndez</p>
                  <p className="text-sm text-aiden-muted">Supervisor · Operaciones</p>
                  <button className="text-xs text-aiden-secondary hover:text-aiden-primary mt-1 font-medium">Cambiar foto</button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="aiden-label">Nombre</label><input className="aiden-input" defaultValue="Carlos" /></div>
                <div><label className="aiden-label">Apellido</label><input className="aiden-input" defaultValue="Méndez" /></div>
                <div><label className="aiden-label">Correo Electrónico</label><input type="email" className="aiden-input" defaultValue="c.mendez@aiden.co" /></div>
                <div><label className="aiden-label">Teléfono</label><input type="tel" className="aiden-input" defaultValue="+57 300 123 4567" /></div>
                <div><label className="aiden-label">Cargo</label><input className="aiden-input" defaultValue="Supervisor Operaciones" /></div>
                <div><label className="aiden-label">Departamento</label><input className="aiden-input" defaultValue="Operaciones" /></div>
              </div>

              <div><label className="aiden-label">Biografía</label><textarea className="aiden-input min-h-20" defaultValue="Supervisor de operaciones con 5 años de experiencia en gestión de viveros y cultivos ornamentales." /></div>

              <div className="flex justify-end">
                <button className="aiden-btn-primary text-sm"><Save size={15} />Guardar cambios</button>
              </div>
            </div>
          )}

          {tab === "security" && (
            <div className="space-y-5">
              <div className="aiden-card p-6 space-y-4">
                <p className="section-title">Cambiar Contraseña</p>
                <div><label className="aiden-label">Contraseña actual</label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} className="aiden-input pr-10" placeholder="••••••••" />
                    <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-aiden-muted hover:text-aiden-primary">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <div><label className="aiden-label">Nueva contraseña</label><input type="password" className="aiden-input" placeholder="Mínimo 8 caracteres" /></div>
                <div><label className="aiden-label">Confirmar nueva contraseña</label><input type="password" className="aiden-input" placeholder="Repite la nueva contraseña" /></div>
                <div className="flex justify-end">
                  <button className="aiden-btn-primary text-sm"><Key size={15} />Actualizar contraseña</button>
                </div>
              </div>

              <div className="aiden-card p-6">
                <p className="section-title mb-4">Autenticación de Dos Factores</p>
                <div className="flex items-center justify-between p-4 bg-aiden-bg rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-aiden-text">Autenticación 2FA</p>
                    <p className="text-xs text-aiden-muted mt-0.5">Protege tu cuenta con una capa adicional de seguridad</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-[#E5EDE8] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-aiden-primary" />
                  </label>
                </div>
              </div>
            </div>
          )}

          {tab === "notifications" && (
            <div className="aiden-card p-6 space-y-4">
              <p className="section-title">Preferencias de Notificaciones</p>
              {[
                { label: "Alertas ambientales", desc, humedad y luminosidad fuera de rango", enabled,
                { label: "Stock bajo mínimo", desc, enabled,
                { label: "Incidencias de calidad", desc, enabled,
                { label: "Actualizaciones de lotes", desc, enabled,
                { label: "Reportes automáticos", desc, enabled,
                { label: "Nuevos usuarios", desc, enabled,
              ].map((n, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-aiden-bg rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-aiden-text">{n.label}</p>
                    <p className="text-xs text-aiden-muted mt-0.5">{n.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={n.enabled} />
                    <div className="w-10 h-5 bg-[#E5EDE8] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-aiden-primary" />
                  </label>
                </div>
              ))}
            </div>
          )}

          {tab === "system" && (
            <div className="aiden-card p-6 space-y-5">
              <p className="section-title">Parámetros del Sistema</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="aiden-label">Nombre del vivero</label><input className="aiden-input" defaultValue="Vivero Las Palmas S.A.S." /></div>
                <div><label className="aiden-label">NIT / RUT</label><input className="aiden-input" defaultValue="900.123.456-7" /></div>
                <div><label className="aiden-label">Zona horaria</label><select className="aiden-input"><option>América/Bogotá (UTC-5)</option></select></div>
                <div><label className="aiden-label">Idioma</label><select className="aiden-input"><option>Español (Colombia)</option></select></div>
                <div><label className="aiden-label">Moneda</label><select className="aiden-input"><option>COP - Peso Colombiano</option></select></div>
                <div><label className="aiden-label">Formato de fecha</label><select className="aiden-input"><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option></select></div>
              </div>
              <div>
                <label className="aiden-label">Dirección del vivero</label>
                <input className="aiden-input" defaultValue="Km 12 Vía Mosquera, Cundinamarca, Colombia" />
              </div>
              <div className="flex justify-end">
                <button className="aiden-btn-primary text-sm"><Save size={15} />Guardar configuración</button>
              </div>
            </div>
          )}

          {tab === "audit" && role === "admin" && (
            <div className="aiden-card overflow-hidden">
              <div className="p-4 border-b border-[#E5EDE8]">
                <p className="section-title">Registro de Auditoría</p>
                <p className="text-xs text-aiden-muted mt-0.5">Acciones registradas en el sistema</p>
              </div>
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
