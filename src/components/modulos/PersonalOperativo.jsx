import { useState } from "react"
import { Search, Plus, Users, UserCheck, Clock, Star, X, Mail, Phone } from "lucide-react"

const employees = [
  { id: "EMP-001", name: "Carlos Méndez", role: "supervisor", email: "c.mendez@aiden.co", phone: "+57 300 123 4567", dept: "Operaciones", tasks: 8, done: 7, rating: 4.8, status: "active", img: "CM" },
  { id: "EMP-002", name: "Luis Torres", role: "operario", email: "l.torres@aiden.co", phone: "+57 301 234 5678", dept: "Producción", tasks: 5, done: 4, rating: 4.5, status: "active", img: "LT" },
  { id: "EMP-003", name: "Ana Ruiz", role: "supervisor", email: "a.ruiz@aiden.co", phone: "+57 302 345 6789", dept: "Calidad", tasks: 6, done: 6, rating: 4.9, status: "active", img: "AR" },
  { id: "EMP-004", name: "Pedro Vargas", role: "operario", email: "p.vargas@aiden.co", phone: "+57 303 456 7890", dept: "Producción", tasks: 4, done: 2, rating: 4.2, status: "active", img: "PV" },
  { id: "EMP-005", name: "Valentina Soto", role: "operario", email: "v.soto@aiden.co", phone: "+57 304 567 8901", dept: "Ambiental", tasks: 3, done: 3, rating: 4.7, status: "active", img: "VS" },
  { id: "EMP-006", name: "Miguel Herrera", role: "operario", email: "m.herrera@aiden.co", phone: "+57 305 678 9012", dept: "Producción", tasks: 5, done: 5, rating: 4.6, status: "vacation", img: "MH" },
  { id: "EMP-007", name: "Daniela Castro", role: "operario", email: "d.castro@aiden.co", phone: "+57 306 789 0123", dept: "Inventario", tasks: 4, done: 1, rating: 4.0, status: "leave", img: "DC" },
]

const roleLabel = { admin: "Administrador", supervisor: "Supervisor", operario: "Operario" }
const roleBadge = { admin: "badge-red", supervisor: "badge-blue", operario: "badge-green" }
const statusLabel = { active: "Activo", vacation: "Vacaciones", leave: "Permiso" }
const statusBadge = { active: "badge-green", vacation: "badge-blue", leave: "badge-yellow" }

const avatarColors = ["bg-aiden-primary", "bg-aiden-secondary", "bg-aiden-info", "bg-[#7C3AED]", "bg-[#DB2777]", "bg-[#D97706]", "bg-[#059669]"]

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
    <section className="space-y-6">
      <section className="flex items-center justify-between">
        <section>
          <h1 className="page-title">Personal</h1>
          <p className="text-sm text-aiden-muted mt-1">Gestión de empleados, roles y desempeño</p>
        </section>
        <button onClick={() => setShowAdd(true)} className="aiden-btn-primary text-sm">
          <Plus size={16} />
          Nuevo Empleado
        </button>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Empleados", value: String(employees.length), icon: <Users size={18} />, bg: "bg-aiden-light", color: "text-aiden-primary" },
          { label: "Activos Hoy", value: String(employees.filter(e => e.status === "active").length), icon: <UserCheck size={18} />, bg: "bg-aiden-success-bg", color: "text-aiden-success" },
          { label: "Supervisores", value: String(employees.filter(e => e.role === "supervisor").length), icon: <Star size={18} />, bg: "bg-aiden-info-bg", color: "text-aiden-info" },
          { label: "Tareas Pendientes", value: String(employees.reduce((a, e) => a + (e.tasks - e.done), 0)), icon: <Clock size={18} />, bg: "bg-aiden-warning-bg", color: "text-aiden-warning" },
        ].map(k => (
          <section key={k.label} className="aiden-card p-4 flex items-center gap-4">
            <section className={`w-10 h-10 rounded-xl flex items-center justify-center ${k.bg} ${k.color} shrink-0`}>{k.icon}</section>
            <section>
              <p className="text-xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{k.value}</p>
              <p className="text-xs text-aiden-muted">{k.label}</p>
            </section>
          </section>
        ))}
      </section>

      <section className="flex flex-wrap gap-3">
        <section className="relative flex-1 min-w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-aiden-muted" />
          <input className="aiden-input pl-9 text-sm" placeholder="Buscar empleado..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: "0.45rem 0.875rem 0.45rem 2rem" }} />
        </section>
        <section className="flex gap-1">
          {[["all", "Todos"], ["supervisor", "Supervisores"], ["operario", "Operarios"]].map(([k, l]) => (
            <button key={k} onClick={() => setRoleFilter(k)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${roleFilter === k ? "bg-aiden-primary text-white" : "bg-aiden-light text-aiden-muted hover:text-aiden-primary"}`}>{l}</button>
          ))}
        </section>
      </section>

      <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((emp, i) => (
          <section key={emp.id} className="aiden-card p-5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all" onClick={() => setSelected(emp)}>
            <section className="flex items-start gap-4">
              <section className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 ${avatarColors[i % avatarColors.length]}`}>
                {emp.img}
              </section>
              <section className="flex-1 min-w-0">
                <section className="flex items-start justify-between">
                  <section>
                    <p className="text-sm font-semibold text-aiden-text">{emp.name}</p>
                    <p className="text-xs text-aiden-muted">{emp.dept}</p>
                  </section>
                  <span className={`badge ${statusBadge[emp.status]} text-[10px]`}>{statusLabel[emp.status]}</span>
                </section>
                <section className="flex items-center gap-2 mt-2">
                  <span className={`badge ${roleBadge[emp.role]} text-[10px]`}>{roleLabel[emp.role]}</span>
                </section>
              </section>
            </section>

            <section className="mt-4 grid grid-cols-3 gap-2 text-center">
              <section className="bg-aiden-bg rounded-lg p-2">
                <p className="text-sm font-bold text-aiden-text">{emp.tasks}</p>
                <p className="text-[10px] text-aiden-muted">Tareas</p>
              </section>
              <section className="bg-aiden-bg rounded-lg p-2">
                <p className="text-sm font-bold text-aiden-secondary">{emp.done}</p>
                <p className="text-[10px] text-aiden-muted">Hechas</p>
              </section>
              <section className="bg-aiden-bg rounded-lg p-2">
                <p className="text-sm font-bold text-aiden-warning flex items-center justify-center gap-0.5">
                  <Star size={10} className="fill-current" />
                  {emp.rating}
                </p>
                <p className="text-[10px] text-aiden-muted">Rating</p>
              </section>
            </section>

            <section className="mt-3">
              <section className="flex justify-between text-xs mb-1">
                <span className="text-aiden-muted">Progreso tareas</span>
                <span className="text-aiden-text font-medium">{Math.round((emp.done / emp.tasks) * 100)}%</span>
              </section>
              <section className="w-full bg-[#E5EDE8] rounded-full h-1">
                <section className="bg-aiden-primary h-1 rounded-full" style={{ width: `${Math.round((emp.done / emp.tasks) * 100)}%` }} />
              </section>
            </section>
          </section>
        ))}
      </section>

      {/* Detail */}
      {selected && (
        <section className="fixed inset-y-0 right-0 w-80 bg-white border-l border-[#E5EDE8] shadow-2xl z-40 overflow-y-auto">
          <section className="p-5 border-b border-[#E5EDE8] flex items-center justify-between">
            <p className="font-semibold text-aiden-text">Perfil del Empleado</p>
            <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
          </section>
          <section className="p-5">
            <section className="text-center mb-5">
              <section className="w-16 h-16 rounded-2xl bg-aiden-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                {selected.img}
              </section>
              <p className="font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{selected.name}</p>
              <span className={`badge ${roleBadge[selected.role]} text-xs mt-1`}>{roleLabel[selected.role]}</span>
            </section>

            {[
              [<Mail size={13} />, selected.email],
              [<Phone size={13} />, selected.phone],
            ].map(([icon, val], i) => (
              <section key={i} className="flex items-center gap-2 py-2 text-sm text-aiden-muted">
                {icon}
                {String(val)}
              </section>
            ))}

            {[["Departamento", selected.dept], ["Estado", statusLabel[selected.status]], ["ID", selected.id], ["Rating", `${selected.rating}/5.0`]].map(([l, v]) => (
              <section key={l} className="flex justify-between py-2.5 border-b border-[#E5EDE8]">
                <span className="text-xs text-aiden-muted">{l}</span>
                <span className="text-xs font-medium text-aiden-text">{v}</span>
              </section>
            ))}

            <section className="mt-5 flex gap-2">
              <button className="aiden-btn-primary flex-1 justify-center text-sm">Editar</button>
              <button className="aiden-btn-secondary text-sm">Tareas</button>
            </section>
          </section>
        </section>
      )}

      {showAdd && (
        <section className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <section className="aiden-card w-full max-w-md p-6 shadow-2xl">
            <section className="flex items-center justify-between mb-5">
              <p className="section-title">Nuevo Empleado</p>
              <button onClick={() => setShowAdd(false)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
            </section>
            <section className="space-y-4">
              <section><label className="aiden-label">Nombre Completo</label><input className="aiden-input" placeholder="Nombre y apellido" /></section>
              <section><label className="aiden-label">Correo Electrónico</label><input type="email" className="aiden-input" placeholder="correo@vivero.com" /></section>
              <section className="grid grid-cols-2 gap-3">
                <section><label className="aiden-label">Rol</label><select className="aiden-input"><option>Operario</option><option>Supervisor</option></select></section>
                <section><label className="aiden-label">Departamento</label><select className="aiden-input"><option>Producción</option><option>Calidad</option><option>Ambiental</option><option>Inventario</option></select></section>
              </section>
              <section><label className="aiden-label">Teléfono</label><input type="tel" className="aiden-input" placeholder="+57 300 000 0000" /></section>
            </section>
            <section className="flex gap-3 mt-6">
              <button onClick={() => setShowAdd(false)} className="aiden-btn-secondary flex-1 justify-center">Cancelar</button>
              <button onClick={() => setShowAdd(false)} className="aiden-btn-primary flex-1 justify-center">Crear Empleado</button>
            </section>
          </section>
        </section>
      )}
    </section>
  )
}
