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
  { hour: "06:00", temp: 18, hum: 78, lux: 1200, co2: 420 },
  { hour: "08:00", temp: 21, hum: 74, lux: 8500, co2: 435 },
  { hour: "10:00", temp: 25, hum: 68, lux: 18000, co2: 445 },
  { hour: "12:00", temp: 28, hum: 62, lux: 24000, co2: 460 },
  { hour: "14:00", temp: 32, hum: 58, lux: 22000, co2: 455 },
  { hour: "16:00", temp: 29, hum: 64, lux: 16000, co2: 440 },
  { hour: "18:00", temp: 24, hum: 70, lux: 6000, co2: 425 },
  { hour: "20:00", temp: 20, hum: 76, lux: 500, co2: 415 },
]

const sensors = [
  { id: "S-001", name: "Invernadero A · Zona Norte", temp: 26.4, hum: 67, lux: 18200, co2: 442, status: "ok" },
  { id: "S-002", name: "Invernadero A · Zona Sur", temp: 24.8, hum: 71, lux: 17100, co2: 438, status: "ok" },
  { id: "S-003", name: "Invernadero B · Principal", temp: 32.1, hum: 55, lux: 21300, co2: 465, status: "alert" },
  { id: "S-004", name: "Semillero 1", temp: 22.3, hum: 82, lux: 5600, co2: 418, status: "ok" },
  { id: "S-005", name: "Invernadero C", temp: 25.9, hum: 69, lux: 19400, co2: 448, status: "ok" },
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
    { label: "Temperatura", value: `${currentTemp}°C`, ideal: "18–28°C", icon: <Thermometer size={20} />, status: currentTemp > 28 ? "alert" : "ok", bg: "bg-aiden-warning-bg", color: "text-aiden-warning" },
    { label: "Humedad", value: `${currentHum}%`, ideal: "60–80%", icon: <Droplets size={20} />, status: "ok", bg: "bg-aiden-info-bg", color: "text-aiden-info" },
    { label: "Luminosidad", value: "18,200 lux", ideal: "10K–25K lux", icon: <Sun size={20} />, status: "ok", bg: "bg-aiden-warning-bg", color: "text-[#D97706]" },
    { label: "CO₂", value: "442 ppm", ideal: "400–600 ppm", icon: <Wind size={20} />, status: "ok", bg: "bg-aiden-light", color: "text-aiden-primary" },
  ]

  return (
    <section className="space-y-6">
      <section className="flex items-center justify-between">
        <section>
          <h1 className="page-title">Monitoreo Ambiental</h1>
          <p className="text-sm text-aiden-muted mt-1">Sensores en tiempo real · Actualización automática</p>
        </section>
        <section className="flex items-center gap-2">
          <span className="w-2 h-2 bg-aiden-success rounded-full animate-pulse" />
          <span className="text-sm text-aiden-muted font-medium">En vivo</span>
        </section>
      </section>

      {/* Live readings */}
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {readingCards.map((r) => (
          <section key={r.label} className="aiden-card p-5">
            <section className="flex items-center justify-between mb-4">
              <section className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.bg} ${r.color}`}>
                {r.icon}
              </section>
              {r.status === "alert" ? (
                <AlertTriangle size={14} className="text-aiden-danger" />
              ) : (
                <CheckCircle2 size={14} className="text-aiden-success" />
              )}
            </section>
            <p className="text-2xl font-bold text-aiden-text" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {r.value}
            </p>
            <p className="text-xs text-aiden-muted mt-0.5">{r.label}</p>
            <p className="text-xs text-aiden-muted mt-2 border-t border-[#E5EDE8] pt-2">
              Rango ideal: {r.ideal}
            </p>
          </section>
        ))}
      </section>

      {/* Chart */}
      <section className="aiden-card p-5">
        <section className="flex items-center justify-between mb-5">
          <section>
            <p className="section-title">Evolución Diaria</p>
            <p className="text-xs text-aiden-muted mt-0.5">Temperatura y Humedad · Invernadero A</p>
          </section>
        </section>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE8" />
            <XAxis dataKey="hour" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="temp" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} domain={[10, 40]} tickFormatter={(v) => `${v}°`} />
            <YAxis yAxisId="hum" orientation="right" tick={{ fontSize: 12, fill: "#61716A" }} axisLine={false} tickLine={false} domain={[40, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E5EDE8", fontSize: 12 }} />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            <Line yAxisId="temp" type="monotone" dataKey="temp" stroke="#D97706" strokeWidth={2} dot={false} name="Temperatura (°C)" />
            <Line yAxisId="hum" type="monotone" dataKey="hum" stroke="#2563EB" strokeWidth={2} dot={false} name="Humedad (%)" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Sensors table */}
      <section className="aiden-card overflow-hidden">
        <section className="p-4 border-b border-[#E5EDE8]">
          <p className="section-title">Estado de Sensores</p>
        </section>
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
      </section>
    </section>
  )
}
