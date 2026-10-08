import { useState } from "react"
import { Search, Plus, Users, UserCheck, Clock, Star, X, Mail, Phone } from "lucide-react"

const employees = [
  { id: "EMP-001", name, role, email, phone, dept, tasks, done, rating, status, img,
  { id: "EMP-002", name, role, email, phone, dept, tasks, done, rating, status, img,
  { id: "EMP-003", name, role, email, phone, dept, tasks, done, rating, status, img,
  { id: "EMP-004", name, role, email, phone, dept, tasks, done, rating, status, img,
  { id: "EMP-005", name, role, email, phone, dept, tasks, done, rating, status, img,
  { id: "EMP-006", name, role, email, phone, dept, tasks, done, rating, status, img,
  { id: "EMP-007", name, role, email, phone, dept, tasks, done, rating, status, img,
]

const roleLabel= { admin: "Administrador", supervisor, operario= { admin: "badge-red", supervisor, operario= { active: "Activo", vacation, leave= { active: "badge-green", vacation, leave= ["bg-aiden-primary", "bg-aiden-secondary", "bg-aiden-info", "bg-[#7C3AED]", "bg-[#DB2777]", "bg-[#D97706]", "bg-[#059669]"]

export default function Personnel() {
  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [selected, setSelected] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  const filtered = employees.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.email.includes(search)
    const matchRole = roleFilter === "all" || e.role === roleFilter
    return matchSearch && matchRole
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Personal</h1>
          <p className="text-sm text-aiden-muted mt-1">Gestión de empleados, roles y desempeño</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="aiden-btn-primary text-sm">
          <Plus size={16} />
          Nuevo Empleado
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Empleados", value), icon={18} />, bg, color,
          { label: "Activos Hoy", value=> e.status === "active").length), icon={18} />, bg, color,
          { label: "Supervisores", value=> e.role === "supervisor").length), icon={18} />, bg, color,
          { label: "Tareas Pendientes", value, e) => a + (e.tasks - e.done), 0)), icon={18} />, bg, color,
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
          <input className="aiden-input pl-9 text-sm" placeholder="Buscar empleado..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: "0.45rem 0.875rem 0.45rem 2rem" }} />
        </div>
        <div className="flex gap-1">
          {[["all", "Todos"], ["supervisor", "Supervisores"], ["operario", "Operarios"]].map(([k, l]) => (
            <button key={k} onClick={() => setRoleFilter(k)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${roleFilter === k ? "bg-aiden-primary text-white" : "bg-aiden-light text-aiden-muted hover:text-aiden-primary"}`}>{l}</button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((emp, i) => (
          <div key={emp.id} className="aiden-card p-5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all" onClick={() => setSelected(emp)}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 ${avatarColors[i % avatarColors.length]}`}>
                {emp.img}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-aiden-text">{emp.name}</p>
                    <p className="text-xs text-aiden-muted">{emp.dept}</p>
                  </div>
                  <span className={`badge ${statusBadge[emp.status]} text-[10px]`}>{statusLabel[emp.status]}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`badge ${roleBadge[emp.role]} text-[10px]`}>{roleLabel[emp.role]}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-aiden-bg rounded-lg p-2">
                <p className="text-sm font-bold text-aiden-text">{emp.tasks}</p>
                <p className="text-[10px] text-aiden-muted">Tareas</p>
              </div>
              <div className="bg-aiden-bg rounded-lg p-2">
                <p className="text-sm font-bold text-aiden-secondary">{emp.done}</p>
                <p className="text-[10px] text-aiden-muted">Hechas</p>
              </div>
              <div className="bg-aiden-bg rounded-lg p-2">
                <p className="text-sm font-bold text-aiden-warning flex items-center justify-center gap-0.5">
                  <Star size={10} className="fill-current" />
                  {emp.rating}
                </p>
                <p className="text-[10px] text-aiden-muted">Rating</p>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-aiden-muted">Progreso tareas</span>
                <span className="text-aiden-text font-medium">{Math.round((emp.done / emp.tasks) * 100)}%</span>
              </div>
              <div className="w-full bg-[#E5EDE8] rounded-full h-1">
                <div className="bg-aiden-primary h-1 rounded-full" style={{ width: `${Math.round((emp.done / emp.tasks) * 100)}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail */}
      {selected && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-[#E5EDE8] shadow-2xl z-40 overflow-y-auto">
          <div className="p-5 border-b border-[#E5EDE8] flex items-center justify-between">
            <p className="font-semibold text-aiden-text">Perfil del Empleado</p>
            <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
          </div>
          <div className="p-5">
            <div className="text-center mb-5">
              <div className="w-16 h-16 rounded-2xl bg-aiden-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                {selected.img}
              </div>
              <p className="font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{selected.name}</p>
              <span className={`badge ${roleBadge[selected.role]} text-xs mt-1`}>{roleLabel[selected.role]}</span>
            </div>

            {[
              [<Mail size={13} />, selected.email],
              [<Phone size={13} />, selected.phone],
            ].map(([icon, val], i) => (
              <div key={i} className="flex items-center gap-2 py-2 text-sm text-aiden-muted">
                {icon}
                {String(val)}
              </div>
            ))}

            {[["Departamento", selected.dept], ["Estado", statusLabel[selected.status]], ["ID", selected.id], ["Rating", `${selected.rating}/5.0`]].map(([l, v]) => (
              <div key={l} className="flex justify-between py-2.5 border-b border-[#E5EDE8]">
                <span className="text-xs text-aiden-muted">{l}</span>
                <span className="text-xs font-medium text-aiden-text">{v}</span>
              </div>
            ))}

            <div className="mt-5 flex gap-2">
              <button className="aiden-btn-primary flex-1 justify-center text-sm">Editar</button>
              <button className="aiden-btn-secondary text-sm">Tareas</button>
            </div>
          </div>
        </div>
      )}

      {showAdd && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="aiden-card w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="section-title">Nuevo Empleado</p>
              <button onClick={() => setShowAdd(false)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
            </div>
            <div className="space-y-4">
              <div><label className="aiden-label">Nombre Completo</label><input className="aiden-input" placeholder="Nombre y apellido" /></div>
              <div><label className="aiden-label">Correo Electrónico</label><input type="email" className="aiden-input" placeholder="correo@vivero.com" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Rol</label><select className="aiden-input"><option>Operario</option><option>Supervisor</option></select></div>
                <div><label className="aiden-label">Departamento</label><select className="aiden-input"><option>Producción</option><option>Calidad</option><option>Ambiental</option><option>Inventario</option></select></div>
              </div>
              <div><label className="aiden-label">Teléfono</label><input type="tel" className="aiden-input" placeholder="+57 300 000 0000" /></div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAdd(false)} className="aiden-btn-secondary flex-1 justify-center">Cancelar</button>
              <button onClick={() => setShowAdd(false)} className="aiden-btn-primary flex-1 justify-center">Crear Empleado</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
