import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { TrendingUp, TrendingDown, CircleDollarSign, Plus, X } from "lucide-react"
import { useState } from "react"

const monthlyCosts = [
  { mes: "Mar", mano_obra: 18000, insumos: 12000, servicios: 5000, otros: 3000 },
  { mes: "Abr", mano_obra: 19000, insumos: 13500, servicios: 5200, otros: 2800 },
  { mes: "May", mano_obra: 18500, insumos: 11800, servicios: 5100, otros: 3200 },
  { mes: "Jun", mano_obra: 21000, insumos: 14200, servicios: 5400, otros: 3100 },
  { mes: "Jul", mano_obra: 20000, insumos: 13000, servicios: 5300, otros: 2900 },
  { mes: "Ago", mano_obra: 22000, insumos: 15500, servicios: 5800, otros: 3400 },
]

const costByLot = [
  { lot: "LT-089", cost: 8400 },
  { lot: "LT-091", cost: 6200 },
  { lot: "LT-094", cost: 4100 },
  { lot: "LT-080", cost: 9800 },
  { lot: "LT-086", cost: 5300 },
]

const categoryBreakdown = [
  { name: "Mano de Obra", value: 22000, color: "#0A4F31" },
  { name: "Insumos", value: 15500, color: "#157347" },
  { name: "Servicios", value: 5800, color: "#E9F5EF" },
  { name: "Otros", value: 3400, color: "#C8E0D4" },
]

const movements = [
  { id: "MOV-001", date: "2024-08-28", desc: "Compra Sustrato Premium 100kg", cat: "Insumos", lot: "LT-2024-089", amount: -420000, type: "expense" },
  { id: "MOV-002", date: "2024-08-27", desc: "Venta Lirio Oriental 120 u", cat: "Ingresos", lot: "LT-2024-080", amount: 1440000, type: "income" },
  { id: "MOV-003", date: "2024-08-26", desc: "Nómina semana 34 · 18 operarios", cat: "Mano de obra", lot: "—", amount: -3200000, type: "expense" },
  { id: "MOV-004", date: "2024-08-25", desc: "Factura agua agosto · Invernadero A-B-C", cat: "Servicios", lot: "—", amount: -480000, type: "expense" },
  { id: "MOV-005", date: "2024-08-24", desc: "Fungicida Captan 50WP 5kg", cat: "Agroquímicos", lot: "LT-2024-089", amount: -160000, type: "expense" },
]

export default function Costs() {
  const [showAdd, setShowAdd] = useState(false)

  const totalCostsMonth = monthlyCosts[monthlyCosts.length - 1]
  const totalMonth = Object.values(totalCostsMonth).filter(v => typeof v === "number").reduce((a, b) => a + (b ), 0) as number

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Costos</h1>
          <p className="text-sm text-aiden-muted mt-1">Dashboard financiero del vivero · Agosto 2026</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="aiden-btn-primary text-sm">
          <Plus size={16} />
          Nuevo Movimiento
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Costos del Mes", value: `$${(totalMonth / 1000).toFixed(0)}K`, change: "+5.2% vs. anterior", icon: <CircleDollarSign size={18} />, bg: "bg-aiden-danger-bg", color: "text-aiden-danger" },
          { label: "Ingresos del Mes", value: "$115K", change: "+18.5% vs. anterior", icon: <TrendingUp size={18} />, bg: "bg-aiden-success-bg", color: "text-aiden-success" },
          { label: "Margen Bruto", value: "40.9%", change: "Meta: 38%", icon: <TrendingUp size={18} />, bg: "bg-aiden-light", color: "text-aiden-primary" },
          { label: "Costo por Lote (prom.)", value: "$6.8K", change: "5 lotes activos", icon: <TrendingDown size={18} />, bg: "bg-aiden-info-bg", color: "text-aiden-info" },
        ].map(k => (
          <div key={k.label} className="aiden-card p-4 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${k.bg} ${k.color}`}>{k.icon}</div>
            <div>
              <p className="text-xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>{k.value}</p>
              <p className="text-xs text-aiden-muted">{k.label}</p>
              <p className="text-xs text-aiden-muted mt-0.5 opacity-70">{k.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="aiden-card p-5 lg:col-span-2">
          <p className="section-title mb-1">Costos por Categoría</p>
          <p className="text-xs text-aiden-muted mb-5">Últimos 6 meses (COP $000)</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyCosts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
              <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#61716A" }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}K`} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }} formatter={(v) => [`$${(v / 1000).toFixed(0)}K`]} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="mano_obra" stackId="a" fill="#0A4F31" name="Mano de Obra" />
              <Bar dataKey="insumos" stackId="a" fill="#157347" name="Insumos" />
              <Bar dataKey="servicios" stackId="a" fill="#C8E0D4" name="Servicios" />
              <Bar dataKey="otros" stackId="a" fill="#E9F5EF" name="Otros" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="aiden-card p-5">
          <p className="section-title mb-1">Distribución Agosto</p>
          <p className="text-xs text-aiden-muted mb-4">Total: ${(totalMonth / 1000).toFixed(0)}K</p>
          <div className="flex justify-center mb-4">
            <PieChart width={160} height={160}>
              <Pie data={categoryBreakdown} cx={75} cy={75} innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                {categoryBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 11 }} formatter={(v: unknown) => [`$${((v as number) / 1000).toFixed(0)}K`]} />
            </PieChart>
          </div>
          {categoryBreakdown.map(c => (
            <div key={c.name} className="flex items-center justify-between py-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border border-[#C8E0D4]" style={{ background: c.color }} />
                <span className="text-aiden-muted">{c.name}</span>
              </div>
              <span className="font-semibold text-aiden-text">${(c.value / 1000).toFixed(0)}K</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cost by lot */}
      <div className="aiden-card p-5">
        <p className="section-title mb-5">Costo por Lote</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={costByLot}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
            <XAxis dataKey="lot" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#61716A" }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}`} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }} formatter={(v: unknown) => [`$${(v as number).toLocaleString()}`, "Costo"]} />
            <Bar dataKey="cost" fill="#0A4F31" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Movements */}
      <div className="aiden-card overflow-hidden">
        <div className="p-4 border-b border-[#E5EDE8] flex items-center justify-between">
          <p className="section-title">Movimientos Recientes</p>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-aiden-bg border-b border-[#E5EDE8]">
              {["ID", "Fecha", "Descripción", "Categoría", "Lote", "Monto"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-aiden-muted uppercase tracking-wide whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {movements.map(m => (
              <tr key={m.id} className="table-row border-b border-[#E5EDE8] last:border-0">
                <td className="px-4 py-3 text-xs font-mono text-aiden-muted">{m.id}</td>
                <td className="px-4 py-3 text-sm text-aiden-muted">{m.date}</td>
                <td className="px-4 py-3 text-sm text-aiden-text">{m.desc}</td>
                <td className="px-4 py-3"><span className="badge badge-gray text-[10px]">{m.cat}</span></td>
                <td className="px-4 py-3 text-xs font-mono text-aiden-primary">{m.lot}</td>
                <td className="px-4 py-3">
                  <span className={`text-sm font-semibold ${m.type === "income" ? "text-aiden-success" : "text-aiden-danger"}`}>
                    {m.type === "income" ? "+" : ""}${Math.abs(m.amount).toLocaleString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="aiden-card w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="section-title">Nuevo Movimiento</p>
              <button onClick={() => setShowAdd(false)} className="w-7 h-7 rounded-lg hover:bg-aiden-light flex items-center justify-center"><X size={15} /></button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Tipo</label><select className="aiden-input"><option>Gasto</option><option>Ingreso</option></select></div>
                <div><label className="aiden-label">Categoría</label><select className="aiden-input"><option>Mano de Obra</option><option>Insumos</option><option>Servicios</option><option>Agroquímicos</option><option>Otros</option></select></div>
              </div>
              <div><label className="aiden-label">Descripción</label><input className="aiden-input" placeholder="Descripción del movimiento" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="aiden-label">Monto (COP)</label><input type="number" className="aiden-input" placeholder="0" /></div>
                <div><label className="aiden-label">Fecha</label><input type="date" className="aiden-input" /></div>
              </div>
              <div><label className="aiden-label">Lote (opcional)</label><select className="aiden-input"><option value="">Sin lote asociado</option><option>LT-2024-089</option><option>LT-2024-091</option></select></div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAdd(false)} className="aiden-btn-secondary flex-1 justify-center">Cancelar</button>
              <button onClick={() => setShowAdd(false)} className="aiden-btn-primary flex-1 justify-center">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
