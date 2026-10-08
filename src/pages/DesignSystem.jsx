import { useState } from "react"
import { Leaf, CheckCircle2, AlertTriangle, Info, XCircle, Plus, Download, Search, Edit2, Trash2, ChevronDown } from "lucide-react"

export default function DesignSystem() {
  const [activeSection, setActiveSection] = useState("colors")

  const sections = [
    "colors", "typography", "buttons", "inputs", "badges", "cards", "tables", "spacing"
  ]

  const colors = [
    { name: "Primary", hex: "#0A4F31", var: "aiden-primary", text: "white" },
    { name: "Secondary", hex: "#157347", var: "aiden-secondary", text: "white" },
    { name: "Hover", hex: "#0d6b43", var: "aiden-hover", text: "white" },
    { name: "Light", hex: "#E9F5EF", var: "aiden-light", text: "#0A4F31" },
    { name: "Background", hex: "#F4FBF7", var: "aiden-bg", text: "#1F2937" },
    { name: "Surface", hex: "#FFFFFF", var: "aiden-surface", text: "#1F2937" },
    { name: "Text", hex: "#1F2937", var: "aiden-text", text: "white" },
    { name: "Muted", hex: "#61716A", var: "aiden-muted", text: "white" },
    { name: "Border", hex: "#C8E0D4", var: "aiden-border", text: "#1F2937" },
    { name: "Danger", hex: "#DC2626", var: "aiden-danger", text: "white" },
    { name: "Warning", hex: "#D97706", var: "aiden-warning", text: "white" },
    { name: "Info", hex: "#2563EB", var: "aiden-info", text: "white" },
    { name: "Success", hex: "#16A34A", var: "aiden-success", text: "white" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-aiden-primary rounded-xl flex items-center justify-center">
          <Leaf size={18} className="text-white" />
        </div>
        <div>
          <h1 className="page-title">Design System · AiDEN</h1>
          <p className="text-sm text-aiden-muted mt-0.5">Tokens, componentes y guías visuales</p>
        </div>
      </div>

      {/* Nav */}
      <div className="flex gap-1 flex-wrap">
        {sections.map(s => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${activeSection === s ? "bg-aiden-primary text-white" : "bg-aiden-light text-aiden-muted hover:text-aiden-primary"}`}
          >
            {s === "colors" ? "Colores" : s === "typography" ? "Tipografía" : s === "buttons" ? "Botones" : s === "inputs" ? "Inputs" : s === "badges" ? "Badges" : s === "cards" ? "Tarjetas" : s === "tables" ? "Tablas" : "Espaciado"}
          </button>
        ))}
      </div>

      {/* Colors */}
      {activeSection === "colors" && (
        <div className="space-y-4">
          <div className="aiden-card p-6">
            <p className="section-title mb-5">Paleta de Colores</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {colors.map(c => (
                <div key={c.name} className="rounded-xl overflow-hidden border border-[#E5EDE8]">
                  <div className="h-16 flex items-center justify-center" style={{ background: c.hex }}>
                    <span className="text-xs font-mono font-semibold" style={{ color: c.text }}>{c.hex}</span>
                  </div>
                  <div className="p-2 bg-white">
                    <p className="text-xs font-semibold text-aiden-text">{c.name}</p>
                    <p className="text-[10px] text-aiden-muted font-mono">bg-{c.var}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aiden-card p-6">
            <p className="section-title mb-5">Estados Semánticos</p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Éxito", bg: "bg-aiden-success-bg", text: "text-aiden-success", icon: <CheckCircle2 size={16} />, sample: "Operación exitosa" },
                { label: "Advertencia", bg: "bg-aiden-warning-bg", text: "text-aiden-warning", icon: <AlertTriangle size={16} />, sample: "Revisión requerida" },
                { label: "Error", bg: "bg-aiden-danger-bg", text: "text-aiden-danger", icon: <XCircle size={16} />, sample: "Error del sistema" },
                { label: "Información", bg: "bg-aiden-info-bg", text: "text-aiden-info", icon: <Info size={16} />, sample: "Datos actualizados" },
              ].map(s => (
                <div key={s.label} className={`rounded-xl p-4 ${s.bg}`}>
                  <div className={`flex items-center gap-2 mb-2 ${s.text}`}>
                    {s.icon}
                    <span className="text-sm font-semibold">{s.label}</span>
                  </div>
                  <p className="text-xs text-aiden-muted">{s.sample}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Typography */}
      {activeSection === "typography" && (
        <div className="aiden-card p-6 space-y-6">
          <p className="section-title">Tipografía</p>

          <div className="space-y-4 pb-5 border-b border-[#E5EDE8]">
            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide">Display · DM Sans</p>
            {[
              { size: "text-4xl font-bold", sample: "Gestión de Viveros AiDEN", label: "H1 · 36px Bold" },
              { size: "text-3xl font-bold", sample: "Dashboard Supervisor", label: "H2 · 30px Bold" },
              { size: "text-2xl font-bold", sample: "Módulos Operativos", label: "H3 · 24px Bold" },
              { size: "text-xl font-semibold", sample: "Inventario y Producción", label: "H4 · 20px Semibold" },
            ].map(t => (
              <div key={t.label} className="flex items-baseline gap-4">
                <p className={`${t.size} text-aiden-text flex-1`} style={{ fontFamily: "DM Sans, sans-serif" }}>{t.sample}</p>
                <span className="text-xs text-aiden-muted whitespace-nowrap font-mono">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide">Body · Inter</p>
            {[
              { size: "text-base", weight: "font-normal", sample: "Control de lotes, inventario, costos, alertas, personal y trazabilidad para el vivero agrícola.", label: "Body · 16px Regular" },
              { size: "text-sm", weight: "font-medium", sample: "Lote LT-2024-089 · Rosa canina · Etapa: Floración", label: "Small · 14px Medium" },
              { size: "text-xs", weight: "font-medium", sample: "CATEGORÍA · ESTADO · RESPONSABLE", label: "Label · 12px Medium" },
              { size: "text-xs font-mono", weight: "font-normal", sample: "LT-2024-089 · INV-001 · EMP-003", label: "Mono · 12px Regular" },
            ].map(t => (
              <div key={t.label} className="flex items-start gap-4">
                <p className={`${t.size} ${t.weight} text-aiden-muted flex-1`}>{t.sample}</p>
                <span className="text-xs text-aiden-muted whitespace-nowrap font-mono">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Buttons */}
      {activeSection === "buttons" && (
        <div className="aiden-card p-6 space-y-6">
          <p className="section-title">Botones</p>

          <div>
            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Variantes</p>
            <div className="flex flex-wrap gap-3">
              <button className="aiden-btn-primary">Primario</button>
              <button className="aiden-btn-secondary">Secundario</button>
              <button className="px-4 py-2 text-sm font-medium text-aiden-muted hover:text-aiden-primary transition-colors">Texto</button>
              <button className="aiden-btn-primary opacity-50 cursor-not-allowed">Deshabilitado</button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Con iconos</p>
            <div className="flex flex-wrap gap-3">
              <button className="aiden-btn-primary"><Plus size={16} />Nuevo Lote</button>
              <button className="aiden-btn-secondary"><Download size={16} />Exportar</button>
              <button className="aiden-btn-secondary"><Search size={16} />Buscar</button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Tamaños</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="aiden-btn-primary text-xs px-3 py-1.5">Pequeño</button>
              <button className="aiden-btn-primary text-sm">Mediano</button>
              <button className="aiden-btn-primary text-base px-6 py-3">Grande</button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Estados semánticos</p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-aiden-danger text-white hover:bg-red-700 transition-colors flex items-center gap-2"><Trash2 size={14} />Eliminar</button>
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-aiden-success text-white hover:bg-green-700 transition-colors flex items-center gap-2"><CheckCircle2 size={14} />Confirmar</button>
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-aiden-warning text-white hover:bg-amber-700 transition-colors flex items-center gap-2"><AlertTriangle size={14} />Advertir</button>
            </div>
          </div>
        </div>
      )}

      {/* Inputs */}
      {activeSection === "inputs" && (
        <div className="aiden-card p-6 space-y-6">
          <p className="section-title">Inputs y Formularios</p>
          <div className="max-w-md space-y-4">
            <div><label className="aiden-label">Input normal</label><input className="aiden-input" placeholder="Texto de ejemplo..." /></div>
            <div><label className="aiden-label">Input con error</label><input className="aiden-input" style={{ borderColor: "#DC2626" }} defaultValue="Valor incorrecto" /><p className="text-xs text-aiden-danger mt-1">Este campo es requerido</p></div>
            <div><label className="aiden-label">Select</label>
              <div className="relative">
                <select className="aiden-input pr-8 appearance-none"><option>Opción 1</option><option>Opción 2</option></select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-aiden-muted pointer-events-none" />
              </div>
            </div>
            <div><label className="aiden-label">Textarea</label><textarea className="aiden-input min-h-20" placeholder="Descripción larga..." /></div>
            <div className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4 accent-aiden-primary rounded" /><label className="text-sm text-aiden-muted">Checkbox activo</label></div>
            <div className="flex items-center gap-2"><input type="radio" className="accent-aiden-primary" /><label className="text-sm text-aiden-muted">Radio button</label></div>
          </div>
        </div>
      )}

      {/* Badges */}
      {activeSection === "badges" && (
        <div className="aiden-card p-6 space-y-5">
          <p className="section-title">Badges y Estados</p>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Colores</p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-green">Activo</span>
                <span className="badge badge-red">Crítico</span>
                <span className="badge badge-yellow">Advertencia</span>
                <span className="badge badge-blue">En proceso</span>
                <span className="badge badge-gray">Inactivo</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Contexto</p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-green">Normal</span>
                <span className="badge badge-yellow">Bajo mínimo</span>
                <span className="badge badge-red">Stock crítico</span>
                <span className="badge badge-green">Floración</span>
                <span className="badge badge-blue">Supervisor</span>
                <span className="badge badge-red">Administrador</span>
                <span className="badge badge-green">Operario</span>
                <span className="badge badge-blue">En cosecha</span>
                <span className="badge badge-gray">Completado</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cards */}
      {activeSection === "cards" && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aiden-card p-5">
              <div className="w-10 h-10 bg-aiden-light rounded-xl flex items-center justify-center mb-4">
                <Leaf size={18} className="text-aiden-primary" />
              </div>
              <p className="font-semibold text-aiden-text mb-1">Card básica</p>
              <p className="text-sm text-aiden-muted">Tarjeta con icono, título y descripción.</p>
            </div>
            <div className="aiden-card p-5 border-l-4" style={{ borderLeftColor: "#0A4F31" }}>
              <p className="text-xs font-semibold text-aiden-primary uppercase tracking-wide mb-2">Alerta</p>
              <p className="font-semibold text-aiden-text mb-1">Card con acento</p>
              <p className="text-sm text-aiden-muted">Border izquierdo de color para alertas.</p>
            </div>
            <div className="aiden-card p-5 bg-aiden-primary text-white">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-2">Destacada</p>
              <p className="text-2xl font-bold mb-1" style={{ fontFamily: "DM Sans, sans-serif" }}>48</p>
              <p className="text-sm text-white/75">Lotes Activos</p>
            </div>
          </div>
        </div>
      )}

      {/* Tables */}
      {activeSection === "tables" && (
        <div className="aiden-card overflow-hidden">
          <div className="p-4 border-b border-[#E5EDE8]">
            <p className="section-title">Tabla estándar</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-aiden-bg border-b border-[#E5EDE8]">
                {["Código", "Nombre", "Categoría", "Estado", "Acciones"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-aiden-muted uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { code: "INV-001", name: "Sustrato Premium", cat: "Sustratos", status: "Normal", statusClass: "badge-green" },
                { code: "INV-002", name: "Semillas Rosa", cat: "Semillas", status: "Bajo", statusClass: "badge-yellow" },
                { code: "INV-003", name: "Fungicida Captan", cat: "Agroquímicos", status: "Crítico", statusClass: "badge-red" },
              ].map(row => (
                <tr key={row.code} className="table-row border-b border-[#E5EDE8] last:border-0">
                  <td className="px-4 py-3 text-xs font-mono text-aiden-muted">{row.code}</td>
                  <td className="px-4 py-3 text-sm font-medium text-aiden-text">{row.name}</td>
                  <td className="px-4 py-3"><span className="badge badge-gray text-[11px]">{row.cat}</span></td>
                  <td className="px-4 py-3"><span className={`badge ${row.statusClass} text-[11px]`}>{row.status}</span></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center text-aiden-muted hover:text-aiden-primary"><Edit2 size={13} /></button>
                      <button className="w-7 h-7 rounded-lg hover:bg-aiden-danger-bg flex items-center justify-center text-aiden-muted hover:text-aiden-danger"><Trash2 size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Spacing */}
      {activeSection === "spacing" && (
        <div className="aiden-card p-6 space-y-5">
          <p className="section-title">Grid de Espaciados</p>
          <div className="space-y-3">
            {[
              { size: "4px", tw: "p-1", label: "XS" },
              { size: "8px", tw: "p-2", label: "S" },
              { size: "12px", tw: "p-3", label: "M" },
              { size: "16px", tw: "p-4", label: "L" },
              { size: "20px", tw: "p-5", label: "XL" },
              { size: "24px", tw: "p-6", label: "2XL" },
              { size: "32px", tw: "p-8", label: "3XL" },
              { size: "48px", tw: "p-12", label: "4XL" },
            ].map(s => (
              <div key={s.size} className="flex items-center gap-4">
                <div className="w-16 text-right">
                  <span className="text-xs font-mono text-aiden-muted">{s.size}</span>
                </div>
                <div className="bg-aiden-light rounded" style={{ height: 16, width: parseInt(s.size) * 2 + "px", minWidth: 4 }} />
                <div>
                  <span className="text-xs font-semibold text-aiden-text mr-2">{s.label}</span>
                  <span className="text-xs font-mono text-aiden-muted">{s.tw}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold text-aiden-muted uppercase tracking-wide mb-3">Border radius</p>
            <div className="flex flex-wrap gap-4">
              {[["4px", "rounded"], ["8px", "rounded-lg"], ["12px", "rounded-xl"], ["16px", "rounded-2xl"], ["24px", "rounded-3xl"], ["9999px", "rounded-full"]].map(([size, cls]) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 bg-aiden-light border-2 border-aiden-border ${cls}`} />
                  <span className="text-[10px] font-mono text-aiden-muted">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
