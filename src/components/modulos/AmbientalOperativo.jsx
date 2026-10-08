import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Thermometer, Droplets, Sun, Wind, AlertTriangle, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"

const hourlyData = [
  { hour: "06:00", temp, hum, lux, co2,
  { hour: "08:00", temp, hum, lux, co2,
  { hour: "10:00", temp, hum, lux, co2,
  { hour: "12:00", temp, hum, lux, co2,
  { hour: "14:00", temp, hum, lux, co2,
  { hour: "16:00", temp, hum, lux, co2,
  { hour: "18:00", temp, hum, lux, co2,
  { hour: "20:00", temp, hum, lux, co2,
]

const sensors = [
  { id: "S-001", name, temp, hum, lux, co2, status,
  { id: "S-002", name, temp, hum, lux, co2, status,
  { id: "S-003", name, temp, hum, lux, co2, status,
  { id: "S-004", name, temp, hum, lux, co2, status,
  { id: "S-005", name, temp, hum, lux, co2, status,
]

export default function Environmental() {
  const [currentTemp, setCurrentTemp] = useState(26.4)
  const [currentHum, setCurrentHum] = useState(67)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemp(prev => parseFloat((prev + (Math.random() - 0.5) * 0.3).toFixed(1)))
      setCurrentHum(prev => Math.max(50, Math.min(90, Math.round(prev + (Math.random() - 0.5) * 1))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const readingCards = [
    { label: "Temperatura", value, ideal, icon={20} />, status, bg, color,
    { label: "Humedad", value, ideal, icon={20} />, status, bg, color,
    { label: "Luminosidad", value,200 lux", ideal, icon={20} />, status, bg, color,
    { label: "CO₂", value, ideal, icon={20} />, status, bg, color,
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Monitoreo Ambiental</h1>
          <p className="text-sm text-aiden-muted mt-1">Sensores en tiempo real · Actualización automática</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-aiden-success rounded-full animate-pulse" />
          <span className="text-sm text-aiden-muted font-medium">En vivo</span>
        </div>
      </div>

      {/* Live readings */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {readingCards.map((r) => (
          <div key={r.label} className="aiden-card p-5">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.bg} ${r.color}`}>
                {r.icon}
              </div>
              {r.status === "alert" ? (
                <AlertTriangle size={14} className="text-aiden-danger" />
              ) : (
                <CheckCircle2 size={14} className="text-aiden-success" />
              )}
            </div>
            <p className="text-2xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {r.value}
            </p>
            <p className="text-xs text-aiden-muted mt-0.5">{r.label}</p>
            <p className="text-xs text-aiden-muted mt-2 border-t border-[#E5EDE8] pt-2">
              Rango ideal: {r.ideal}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="aiden-card p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="section-title">Evolución Diaria</p>
            <p className="text-xs text-aiden-muted mt-0.5">Temperatura y Humedad · Invernadero A</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
            <XAxis dataKey="hour" tick={{ fontSize: 12, fill={false} tickLine={false} />
            <YAxis yAxisId="temp" tick={{ fontSize: 12, fill={false} tickLine={false} domain={[10, 40]} tickFormatter={(v) => `${v}°`} />
            <YAxis yAxisId="hum" orientation="right" tick={{ fontSize: 12, fill={false} tickLine={false} domain={[40, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ borderRadius: 8, border, fontSize={8} wrapperStyle={{ fontSize: 12 }} />
            <Line yAxisId="temp" type="monotone" dataKey="temp" stroke="#D97706" strokeWidth={2} dot={false} name="Temperatura (°C)" />
            <Line yAxisId="hum" type="monotone" dataKey="hum" stroke="#2563EB" strokeWidth={2} dot={false} name="Humedad (%)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sensors table */}
      <div className="aiden-card overflow-hidden">
        <div className="p-4 border-b border-[#E5EDE8]">
          <p className="section-title">Estado de Sensores</p>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-aiden-bg border-b border-[#E5EDE8]">
              {["Sensor", "Ubicación", "Temperatura", "Humedad", "Luminosidad", "CO₂", "Estado"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-aiden-muted uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sensors.map((s) => (
              <tr key={s.id} className="table-row border-b border-[#E5EDE8] last:border-0">
                <td className="px-4 py-3 text-xs font-mono font-semibold text-aiden-primary">{s.id}</td>
                <td className="px-4 py-3 text-sm text-aiden-text">{s.name}</td>
                <td className="px-4 py-3">
                  <span className={`text-sm font-semibold ${s.temp > 30 ? "text-aiden-danger" : "text-aiden-text"}`}>
                    {s.temp}°C
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-aiden-text">{s.hum}%</td>
                <td className="px-4 py-3 text-sm text-aiden-muted">{s.lux.toLocaleString()} lux</td>
                <td className="px-4 py-3 text-sm text-aiden-muted">{s.co2} ppm</td>
                <td className="px-4 py-3">
                  {s.status === "ok" ? (
                    <span className="badge badge-green text-[10px]">Normal</span>
                  ) : (
                    <span className="badge badge-red text-[10px]">Alerta</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
